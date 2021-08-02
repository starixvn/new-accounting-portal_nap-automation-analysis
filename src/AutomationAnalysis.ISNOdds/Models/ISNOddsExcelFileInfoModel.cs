using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutomationAnalysis.ISNOdds.Models
{
    using Epplus.Mapper.Annotations;

    public class ISNOddsExcelFileInfoModel
    {
        [Cell("A1")]
        public string ReportOption { get; set; }

        [Cell("A2")]
        public DateTime FromDate { get; set; }

        [Cell("A2")]
        public DateTime ToDate { get; set; }

        [Cell("A2")]
        public string League { get; set; }

        [Cell("A2")]
        public string View { get; set; }

        [Cell("A2")]
        public int TimeInterval { get; set; }

        [Cell("A2")]
        public decimal FromInitialHDP { get; set; }

        [Cell("A2")]
        public decimal ToInitialHDP { get; set; }

        [Cell("A2")]
        public decimal FromInitialOU { get; set; }

        [Cell("A2")]
        public decimal ToInitialOU { get; set; }
    }
}