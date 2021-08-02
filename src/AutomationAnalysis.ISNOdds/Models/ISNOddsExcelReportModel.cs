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
        public string FromTime { get; set; }

        [Cell("B5")]
        public string ToTime { get; set; }

        [Cell("C5")]
        public int NoOfLeague { get; set; }

        [Cell("D5")]
        public int NoOfMatch { get; set; }

        [Cell("E5")]
        public float BeforeHDP { get; set; }

        [Cell("F5")]
        public float BeforeOU { get; set; }

        [Cell("G5")]
        public float AfterHDP { get; set; }

        [Cell("H5")]
        public float AfterOU { get; set; }

        [Cell("I5")]
        public float DifferenceHDP { get; set; }

        [Cell("J5")]
        public float DifferenceOU { get; set; }
    }
}