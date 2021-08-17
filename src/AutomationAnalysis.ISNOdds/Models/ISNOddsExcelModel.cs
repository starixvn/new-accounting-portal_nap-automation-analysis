using System.Collections.Generic;

namespace AutomationAnalysis.ISNOdds.Models
{
    public class ISNOddsExcelModel
    {
        public IList<ISNOddsExcelReportModel> Reports { get; set; }
        public IList<ISNOddsExcelReportDetailModel> ReportDetails { get; set; }
        public ISNOddsExcelFileInfoModel FileInfo { get; set; }
    }
}