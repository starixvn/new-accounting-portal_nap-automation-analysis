using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutomationAnalysis.ISNOdds.Models
{
    using Epplus.Mapper.Annotations;

    public class ISNOddsExcelFileInfoModel
    {
        public string ReportOption { get; set; }
        public string FromDate { get; set; }
        public string ToDate { get; set; }
        public string League { get; set; }
        public string View { get; set; }
        public string Interval { get; set; }
        public string InitialHDP { get; set; }
        public string InitialOU { get; set; }
        public string TeamType { get; set; }
        public string Score { get; set; }
        public string RedCard { get; set; }

        public string FromDateTitle => "FromDate: ";
        public string ToDateTitle => "ToDate: ";
    }
}