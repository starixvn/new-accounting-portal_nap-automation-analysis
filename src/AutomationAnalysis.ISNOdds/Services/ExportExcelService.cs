using AutomationAnalysis.ISNOdds.Constant;
using AutomationAnalysis.ISNOdds.Models;
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

        private ExcelWorksheet reportSheet { get; set; }

        public void LoadTemplate(string templatePath)
        {
            using (var stream = new FileStream(templatePath, FileMode.Open, FileAccess.Read))
            {
                excelPackage = new ExcelPackage(stream);
                reportSheet = excelPackage.Workbook.Worksheets[0];
            }
        }

        public ExcelPackage CreateExcelPackage(string templatePath, MainExcelRequest model)
        {
            LoadTemplate(templatePath);
            BuildLAReportBody(model);

            return excelPackage;
        }

        public void BuildLAReportBody(MainExcelRequest model)
        {
            var header = new ISNOddsExcelFileInfoModel
            {
                ReportOption = model.ReportOption
            };

            reportSheet.ApplyModel(header);
            reportSheet.ApplyVertical(model.Reports, ReportConst.StartIndexRow);
        }
    }
}