using Epplus.Mapper.Extensions;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AutomationAnalysis.ISNOdds.Services
{
    public interface ExportExcelService
    {
        ExcelPackage CreateExcelPackage(string templatePath, object model);
    }

    public class ExportExcelServiceImp : ExportExcelService
    {
        private ExcelPackage excelPackage { get; set; }

        private ExcelWorksheet reportSheet;

        public void LoadTemplate(string templatePath)
        {
            using (var stream = new FileStream(templatePath, FileMode.Open, FileAccess.Read))
            {
                excelPackage = new ExcelPackage(stream);
                reportSheet = excelPackage.Workbook.Worksheets.Copy("", "");
            }
        }

        public void ClearTemplate()
        {
            excelPackage.Workbook.Worksheets.Delete("");
        }

        public ExcelPackage CreateExcelPackage(string templatePath, object model)
        {
            LoadTemplate(templatePath);
            BuildLAReportBody(model);
            ClearTemplate();
            return excelPackage;
        }

        public void BuildLAReportBody(object model)
        {
            reportSheet.ApplyModel(model);
            // reportSheet.ApplyVertical(, 1);
        }
    }
}