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
        public float BeforeHDP { get; set; }

        [Cell("F14")]
        public float BeforeOU { get; set; }

        [Cell("G14")]
        public float AfterHDP { get; set; }

        [Cell("H14")]
        public float AfterOU { get; set; }

        [Cell("I14")]
        public float DiffHDP { get; set; }

        [Cell("J14")]
        public float DiffOU { get; set; }
    }
}