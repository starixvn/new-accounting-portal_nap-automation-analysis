using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutomationAnalysis.ISNOdds.Models
{
    using Epplus.Mapper.Annotations;

    public class ISNOddsExcelReportModel
    {
        [Cell("A14")]
        public string From { get; set; }

        [Cell("B14")]
        public string To { get; set; }

        [Cell("C14")]
        public int NumberOfLeague { get; set; }

        [Cell("D14")]
        public int NumberOfMatch { get; set; }

        [Cell("E14")]
        public string BeforeHDP { get; set; }

        [Cell("F14")]
        public string BeforeOU { get; set; }

        [Cell("G14")]
        public string AfterHDP { get; set; }

        [Cell("H14")]
        public string AfterOU { get; set; }

        [Cell("I14")]
        public string DiffHDP { get; set; }

        [Cell("J14")]
        public string DiffOU { get; set; }
    }
}