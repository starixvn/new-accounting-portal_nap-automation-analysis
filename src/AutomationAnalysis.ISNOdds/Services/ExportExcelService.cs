using AutomationAnalysis.ISNOdds.Constant;
using AutomationAnalysis.ISNOdds.Models;
using Epplus.Mapper.Extensions;
using OfficeOpenXml;
using OfficeOpenXml.Style;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AutomationAnalysis.ISNOdds.Services
{
    public interface ExportExcelService
    {
        ExcelPackage CreateExcelPackage(string templatePath, ISNOddsExcelModel model);
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

        public ExcelPackage CreateExcelPackage(string templatePath, ISNOddsExcelModel model)
        {
            LoadTemplate(templatePath);
            BuillReportBody(model);
            return excelPackage;
        }

        public void BuillReportBody(ISNOddsExcelModel model)
        {
            reportSheet.ApplyModel(model.FileInfo);
            ChangeISNOddsTableHead(model.FileInfo);
            if (model.ReportDetails != null)
            {
                reportSheet.ApplyVertical(model.ReportDetails, ReportConst.StartIndexRow);
                AddStyleReportDetails();
                return;
            }
            reportSheet.ApplyVertical(model.Reports, ReportConst.StartIndexRow);
        }

        public void ChangeISNOddsTableHead(ISNOddsExcelFileInfoModel infoModel)
        {
            reportSheet.Cells[ReportConst.BeforeModeCell].Value = "Before " + infoModel.ReportOption;
            reportSheet.Cells[ReportConst.AfterModeCell].Value = "After " + infoModel.ReportOption;
        }

        public void AddStyleReportDetails()
        {
            var lastRow = reportSheet.Dimension.Rows;
            var lastCol = reportSheet.Dimension.Columns;

            for (int i = ReportConst.StartIndexRow; i <= lastRow; i++)
            {
                var value = reportSheet.Cells[i, 1].Value as string;

                if (string.IsNullOrEmpty(value)) continue;

                reportSheet.Cells[i, 1, i, lastCol].Style.Fill.PatternType = ExcelFillStyle.Solid;
                reportSheet.Cells[i, 1, i, lastCol].Style.Fill.BackgroundColor.SetColor(0, 114, 159, 207);
                reportSheet.Cells[i, 1, i, lastCol].Style.Font.Bold = true;
                reportSheet.Cells[i,2].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
            }
        }
    }
}