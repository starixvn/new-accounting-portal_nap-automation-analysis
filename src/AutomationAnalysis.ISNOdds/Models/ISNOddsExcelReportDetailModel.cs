using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutomationAnalysis.ISNOdds.Models
{
    using Epplus.Mapper.Annotations;

    public class ISNOddsExcelReportDetailModel
    {
        [Cell("A14")]
        public string Index { get; set; }

        [Cell("B14")]
        public string MatchName { get; set; }

        [Cell("C14")]
        public string Minute { get; set; }

        [Cell("D14")]
        public string Second { get; set; }

        [Cell("E14")]
        public string OnlySecond { get; set; }

        [Cell("F14")]
        public decimal BeforeHDP { get; set; }

        [Cell("G14")]
        public decimal BeforeOU { get; set; }

        [Cell("H14")]
        public decimal AfterHDP { get; set; }

        [Cell("I14")]
        public decimal AfterOU { get; set; }

        [Cell("J14")]
        public decimal DiffHDP { get; set; }

        [Cell("K14")]
        public decimal DiffOU { get; set; }
    }
}