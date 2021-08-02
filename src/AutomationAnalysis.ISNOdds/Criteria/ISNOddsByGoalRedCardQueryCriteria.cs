namespace AutomationAnalysis.ISNOdds.Criteria
{
    using System;
    using Fanex.Data.Repository;

    public class ISNOddsByGoalRedCardQueryCriteria : CriteriaBase
    {
        public DateTime FromDate { get; set; }

        public DateTime ToDate { get; set; }

        public string League { get; set; }

        public bool View { get; set; }

        public int Interval { get; set; }

        public decimal FromInitialHDP { get; set; }

        public decimal ToInitialHDP { get; set; }

        public decimal FromInitialOU { get; set; }

        public decimal ToInitialOU { get; set; }

        public int HomeScore { get; set; }

        public int AwayScore { get; set; }

        public int HomeRedCard { get; set; }

        public int AwayRedCard { get; set; }

        public int Mode { get; set; }

        public int TeamType { get; set; }

        public override bool IsValid() => true;

        public override string GetSettingKey() => "NAA_ISNOdds_By_GoalRedCard";
    }
}
