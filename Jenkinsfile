@Library("JenkinsPipelineLibrary") _

pipeline {
  agent any

  options{
    buildDiscarder(logRotator(numToKeepStr: '5'))    
    disableConcurrentBuilds()
  }

  triggers{
    pollSCM("H/15 * * * *")
  } 

  stages {
    stage('Build') {
      steps {        
        script{
          pipelineLib.beginSonarQubeForMsBuild("NAP-AutomationAnalysis", "Olympus / NAP-AutomationAnalysis", "/d:sonar.cs.opencover.reportsPaths=%WORKSPACE%\\CoverageReports\\*.xml /d:sonar.cs.vstest.reportsPaths=%WORKSPACE%\\TestResults\\*.trx")

          pipelineLib.msBuild16("AutomationAnalysis.sln")
        }
      }
    }
   
     stage("Test"){
      parallel{
        stage("C# Unit Test"){
          steps{
            script{
              pipelineLib.xUnitForNet5()
            }
          }
        }
		
        stage("ReactJS Unit Test"){
          steps{
            script{
              pipelineLib.jsJest("%WORKSPACE%/AutomationAnalysis.Websites/client")
			  bat label: 'Replace lcov relative path', script: 'node "%WORKSPACE%\\AutomationAnalysis.Websites\\client\\replace-lcov.js" "%WORKSPACE%"'
            }
          }
        }
      }      
    }    

    stage("SonarQube Analysis"){
      steps{       
        script{
          pipelineLib.endSonarQubeForMsBuild()
        }
      }
      
      post{
        always{
          script{
            if(manager.logContains(".*Quality gate status.*")){              
              pipelineLib.generateSonarQubeReport("NAP-AutomationAnalysis")
            }
          }
        }
      }
    }
  }

  post{
    always{
	  archiveArtifacts "*.xml,*.email"
      step([$class: 'ACIPluginPublisher', name: '*.xml', shownOnProjectPage: false])
      cobertura coberturaReportFile: "cobertura.xml", onlyStable: false
      xunit thresholds: [failed(failureNewThreshold: '1', failureThreshold: '1')], tools: [xUnitDotNet(deleteOutputFiles: true, failIfNotNew: true, pattern: 'UnitTest.xml', skipNoTestFiles: false, stopProcessingIfError: true)]
    }
    unsuccessful{
      emailext body: '$DEFAULT_CONTENT', subject: '$DEFAULT_SUBJECT', to: 'jacob.phan@starixvn.com,luca.duong@starixvn.com,johnny.thai@starixvn.com'
    }
  }
}