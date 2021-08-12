using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutomationAnalysis.ISNOdds.Models
{
    using Epplus.Mapper.Annotations;

    public class ISNOddsExcelFileInfoModel
    {
        [Cell("C1")]
        public string ReportOption { get; set; }

        [Cell("B2")]
        public string FromDate { get; set; }

        [Cell("D2")]
        public string ToDate { get; set; }

        [Cell("B3")]
        public string View { get; set; }

        [Cell("B4")]
        public string League { get; set; }

        [Cell("B5")]
        public string Interval { get; set; }

        [Cell("C6")]
        public string FromInitialHDP { get; set; }

        [Cell("E6")]
        public string ToInitialHDP { get; set; }

        [Cell("C7")]
        public string FromInitialOU { get; set; }

        [Cell("E7")]
        public string ToInitialOU { get; set; }

        [Cell("B8")]
        public string TeamType { get; set; }

        [Cell("A8")]
        public string TeamTypeTitle { get; set; }

        [Cell("A9")]
        public string TotalGoalOrRedCardTitle { get; set; }

        [Cell("A10")]
        public string CurrentGoalOrRedCardTitle { get; set; }

        [Cell("B9")]
        public string TotalGoalOrRedCard { get; set; }

        [Cell("B10")]
        public string CurrentGoalOrRedCard { get; set; }
    }
}