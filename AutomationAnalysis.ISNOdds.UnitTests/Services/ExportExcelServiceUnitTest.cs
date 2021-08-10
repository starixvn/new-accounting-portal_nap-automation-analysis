using AutomationAnalysis.ISNOdds.Models;
using AutomationAnalysis.ISNOdds.Services;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using Xunit;

namespace AutomationAnalysis.ISNOdds.UnitTests
{
    public class ExportExcelServiceUnitTest
    {
        private readonly ExportExcelServiceImp exportExcel;
        private readonly ExcelWorksheet worksheet;

        public ExportExcelServiceUnitTest()
        {
            exportExcel = new ExportExcelServiceImp();
        }

        [Fact]
        public void CreateExcelPackage_ValidMainReportFile_ExportCorrect()
        {
            var directory = Directory.GetParent(Directory.GetCurrentDirectory()).Parent.Parent.FullName;
            var fileName = "MainReport.xlsx";

            var fileInfo = new ISNOddsExcelFileInfoModel
            {
                ReportOption = "Goal",
                FromDate = "10/01/2021",
                ToDate = "10/02/2021",
                League = "All",
                View = "Full Time",
                Interval = "5",
                FromInitialHDP = "-2",
                ToInitialHDP = " 2",
                FromInitialOU = "-2",
                ToInitialOU = "2",
                TeamType = "Home",
                TeamTypeTitle = "Goal:",
                CurrentGoalOrRedCard = "1-0",
                TotalGoalOrRedCard = "1-0",
                TotalGoalOrRedCardTitle = "Toal Goal",
                CurrentGoalOrRedCardTitle = "Current Red Card",
            };

            var list = new List<ISNOddsExcelReportModel>();

            var excelModel = new ISNOddsExcelModel
            {
                FileInfo = fileInfo,
                Reports = list
            };

            var actual = exportExcel.CreateExcelPackage(Path.Combine(directory, fileName), excelModel);
            var sheet = actual.Workbook.Worksheets[0];

            Assert.Equal("ISN Odds Data", sheet.Cells["A1"].Value);
            Assert.Equal("Goal", sheet.Cells["C1"].Value);
        }

        [Fact]
        public void CreateExcelPackage_ValidDrilldownReportFile_ExportCorrect()
        {
            var directory = Directory.GetParent(Directory.GetCurrentDirectory()).Parent.Parent.FullName;
            var fileName = "DrilldownReport.xlsx";

            var fileInfo = new ISNOddsExcelFileInfoModel
            {
                ReportOption = "Goal",
                FromDate = "10/01/2021",
                ToDate = "10/02/2021",
                League = "All",
                View = "Full Time",
                Interval = "0-5",
                FromInitialHDP = "-2",
                ToInitialHDP = " 2",
                FromInitialOU = "-2",
                ToInitialOU = "2",
                TeamType = "Home",
                TeamTypeTitle = "Goal:",
                CurrentGoalOrRedCard = "1-0",
                TotalGoalOrRedCard = "1-0",
                TotalGoalOrRedCardTitle = "Toal Goal",
                CurrentGoalOrRedCardTitle = "Current Red Card",
            };

            var list = new List<ISNOddsExcelReportDetailModel>();
            list.Add(new ISNOddsExcelReportDetailModel
            {
                Index = "1",
                MatchName = "A -vs B",
                Second = "1",
                Minute = "1",
                OnlySecond = "1",
                BeforeHDP = 1M,
                AfterHDP = 1M,
                BeforeOU = 1M,
                AfterOU = 1M,
                DiffHDP = 1M,
                DiffOU = 1M
            });

            var excelModel = new ISNOddsExcelModel
            {
                FileInfo = fileInfo,
                ReportDetails = list
            };

            var actual = exportExcel.CreateExcelPackage(Path.Combine(directory, fileName), excelModel);
            var sheet = actual.Workbook.Worksheets[0];

            Assert.Equal("ISN Odds Data", sheet.Cells["A1"].Value);
            Assert.Equal("Goal", sheet.Cells["C1"].Value);
            Assert.Equal("0-5", sheet.Cells["B5"].Value);
            Assert.Equal("A -vs B", sheet.Cells["B14"].Value);
        }
    }
}