using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutomationAnalysis.ISNOdds.Models
{
    using Epplus.Mapper.Annotations;

    public class ISNOddsExcelFileInfoModel
    {
        public string ReportOption { get; set; }
        public string FromDate { get; set; }
        public string ToDate { get; set; }
        public string League { get; set; }
        public string View { get; set; }
        public string Interval { get; set; }
        public string InitialHDP { get; set; }
        public string InitialOU { get; set; }
        public string TeamType { get; set; }
        public string Score { get; set; }
        public string RedCard { get; set; }

        public string FromDateTitle => "FromDate: ";
        public string ToDateTitle => "   ToDate: ";
        public string LeagueTitle => "\nLeague: ";
        public string ViewTitle => "   View: ";
        public string IntervalTitle => "\nTime interval: ";
        public string InitialHDPTitle => "\nInitial HDP: ";
        public string InitialOUTitle => "   InitialOU: ";
        public string ReportOptionTitle => $"ISN Odds Data - {ReportOption}";
        public string TotalGoalOrRedCardTitle => "   Total " + (ReportOption == "Goal" ? "Goal: " : "Red Card: ");
        public string CurrentGoalOrRedCardTitle => "   Current " + (ReportOption == "Goal" ? "Red Card: " : "Goal: ");
        public string TotalGoalOrRedCard => ReportOption == "Goal" ? Score : RedCard;
        public string CurrentGoalOrRedCard => ReportOption == "Goal" ? RedCard : Score;
    }
}