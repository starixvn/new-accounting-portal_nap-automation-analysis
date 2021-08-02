using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutomationAnalysis.ISNOdds.Models
{
    using Epplus.Mapper.Annotations;

    public class ISNOddsExcelReportModel
    {
        [Cell("A5")]
        public string From { get; set; }

        [Cell("B5")]
        public string To { get; set; }

        [Cell("C5")]
        public int NumberOfLeague { get; set; }

        [Cell("D5")]
        public int NumberOfMatch { get; set; }

        [Cell("E5")]
        public float BeforeHDP { get; set; }

        [Cell("F5")]
        public float BeforeOU { get; set; }

        [Cell("G5")]
        public float AfterHDP { get; set; }

        [Cell("H5")]
        public float AfterOU { get; set; }

        [Cell("I5")]
        public float DiffHDP { get; set; }

        [Cell("J5")]
        public float DiffOU { get; set; }
    }
}