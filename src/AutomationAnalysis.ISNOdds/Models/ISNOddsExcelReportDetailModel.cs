using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutomationAnalysis.ISNOdds.Models
{
    using Epplus.Mapper.Annotations;

    public class ISNOddsExcelReportDetailModel
    {
        [Cell("A5")]
        public string Index { get; set; }

        [Cell("B5")]
        public string MatchName { get; set; }

        [Cell("C5")]
        public string Minute { get; set; }

        [Cell("D5")]
        public string Second { get; set; }

        [Cell("E5")]
        public string OnlySecond { get; set; }

        [Cell("F5")]
        public string BeforeHDP { get; set; }

        [Cell("G5")]
        public string BeforeOU { get; set; }

        [Cell("H5")]
        public string AfterHDP { get; set; }

        [Cell("I5")]
        public string AfterOU { get; set; }

        [Cell("J5")]
        public string DiffHDP { get; set; }

        [Cell("K5")]
        public string DiffOU { get; set; }
    }
}