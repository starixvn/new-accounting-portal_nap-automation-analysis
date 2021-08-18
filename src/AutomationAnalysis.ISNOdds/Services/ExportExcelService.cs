using AutomationAnalysis.ISNOdds.Constant;
using AutomationAnalysis.ISNOdds.Models;
using Epplus.Mapper.Extensions;
using OfficeOpenXml;
using OfficeOpenXml.Style;
using System;
using System.Drawing;
using System.IO;

namespace AutomationAnalysis.ISNOdds.Services
{
    public interface ExportExcelService
    {
        ExcelPackage CreateExcelPackage(string templatePath, ISNOddsExcelModel model);
    }

    public class ExportExcelServiceImp : ExportExcelService, IDisposable
    {
        private ExcelPackage excelPackage;

        private ExcelWorksheet reportSheet;

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
            BuildReportBody(model);
            return excelPackage;
        }

        public void BuildReportBody(ISNOddsExcelModel model)
        {
            reportSheet.ApplyModel(model.FileInfo);
            if (model.ReportDetails != null)
            {
                ChangeISNOddsDetailsTableHead(model.FileInfo);
                reportSheet.ApplyVertical(model.ReportDetails, ReportConst.StartIndexRow);
                AddStyleReportDetails();
                return;
            }
            ChangeISNOddsTableHead(model.FileInfo);
            reportSheet.ApplyVertical(model.Reports, ReportConst.StartIndexRow);
        }

        public void ChangeISNOddsTableHead(ISNOddsExcelFileInfoModel infoModel)
        {
            reportSheet.Cells[ReportConst.BeforeModeMainCell].Value = "Before " + infoModel.ReportOption;
            reportSheet.Cells[ReportConst.AfterModeMainCell].Value = "After " + infoModel.ReportOption;
        }

        public void ChangeISNOddsDetailsTableHead(ISNOddsExcelFileInfoModel infoModel)
        {
            reportSheet.Cells[ReportConst.BeforeModeDrilldownCell].Value = "Before " + infoModel.ReportOption;
            reportSheet.Cells[ReportConst.AfterModeDrilldownCell].Value = "After " + infoModel.ReportOption;
        }

        public void AddStyleReportDetails()
        {
            var lastRow = reportSheet.Dimension.Rows;
            var lastCol = reportSheet.Dimension.Columns;

            for (int i = ReportConst.StartIndexRow; i <= lastRow; i++)
            {
                var value = reportSheet.Cells[i, 1].Value as string;

                if (string.IsNullOrEmpty(value))
                {
                    continue;
                }

                reportSheet.Cells[i, ReportConst.LeagueRow, i, lastCol].Style.Fill.PatternType = ExcelFillStyle.Solid;
                reportSheet.Cells[i, ReportConst.LeagueRow, i, lastCol].Style.Fill.BackgroundColor.SetColor(ReportConst.LeagueBackgroundColor);
                reportSheet.Cells[i, ReportConst.LeagueRow, i, lastCol].Style.Font.Bold = true;
                reportSheet.Cells[i, ReportConst.LeagueCol].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            // Cleanup
            excelPackage.Dispose();
        }
    }
}