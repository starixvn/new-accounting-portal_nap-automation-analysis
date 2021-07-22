using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutomationAnalysis.Models
{
    public class Filter
    {
        public string ReportOption { get; set; }
        public string GoalOption { get; set; }
        public int ScoreHome { get; set; }
        public int ScoreAway { get; set; }
        public int RedcardHome { get; set; }
        public int RedcardAway { get; set; }
        public string League { get; set; }
        public int TimeInterval { get; set; }
        public string ViewOption { get; set; }
        public float FromHDP { get; set; }
        public float ToHDP { get; set; }
        public float FromOU { get; set; }
        public float ToOU { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
    }
}