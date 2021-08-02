using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutomationAnalysis.ISNOdds.Models
{
    public class ISNOddsExcelModel
    {
        public IList<ISNOddsExcelReportModel> Report { get; set; }

        public ISNOddsExcelFileInfoModel FileInfo { get; set; }
    }
}