using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutomationAnalysis.Models
{
    public class Report
    {
        public string FromTime { get; set; }
        public string ToTime { get; set; }
        public int NoOfLeague { get; set; }
        public int NoOfMatch { get; set; }
        public float BeforeHDP { get; set; }
        public float BeforeOU { get; set; }
        public float AfterHDP { get; set; }
        public float AfterOU { get; set; }
        public float DifferenceHDP { get; set; }
        public float DifferenceOU { get; set; }
    }
}