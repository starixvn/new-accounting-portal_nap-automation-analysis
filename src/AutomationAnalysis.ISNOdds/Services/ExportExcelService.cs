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
        ExcelPackage CreateExcelPackage(string templatePath, MainExcelRequest model);
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
                reportSheet = excelPackage.Workbook.Worksheets.Copy("Template", "Report");
            }
        }

        public void ClearTemplate()
        {
            excelPackage.Workbook.Worksheets.Delete("Report");
        }

        public ExcelPackage CreateExcelPackage(string templatePath, MainExcelRequest model)
        {
            LoadTemplate(templatePath);
            BuildLAReportBody(model);
            excelPackage.Save();
            ClearTemplate();
            return excelPackage;
        }

        public void BuildLAReportBody(MainExcelRequest model)
        {
            //reportSheet.ApplyModel(model);
            reportSheet.ApplyVertical(model.Reports, 5);
        }
    }
}