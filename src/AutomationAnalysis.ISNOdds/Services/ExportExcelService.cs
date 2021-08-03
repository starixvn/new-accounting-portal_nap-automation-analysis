using AutomationAnalysis.ISNOdds.Constant;
using AutomationAnalysis.ISNOdds.Models;
using Epplus.Mapper.Extensions;
using OfficeOpenXml;
using OfficeOpenXml.Style;
using System;
using System.Collections.Generic;
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
            var infoReport = model.FileInfo;

            var cellA1 = reportSheet.Cells["A1"];
            cellA1.RichText.Add($"ISN Odds Data - {infoReport.ReportOption}").Bold = true;

            var cellA2 = reportSheet.Cells["A2"];

            var fromDateLabel = cellA2.RichText.Add("FromDate: ");
            var fromDateValue = cellA2.RichText.Add(infoReport.FromDate);
            var toDateLabel = cellA2.RichText.Add(" ToDate: ");
            var toDateValue = cellA2.RichText.Add(infoReport.ToDate);

            var leagueLabel = cellA2.RichText.Add("\nLeague: ");
            var leagueValue = cellA2.RichText.Add(infoReport.League);
            var viewLabel = cellA2.RichText.Add(" View: ");
            var viewValue = cellA2.RichText.Add(infoReport.View);

            var intervalLabel = cellA2.RichText.Add("\nTime interval: ");
            var intervalValue = cellA2.RichText.Add(infoReport.Interval);

            var hdpLabel = cellA2.RichText.Add("\nInitial HDP: ");
            var hdbValue = cellA2.RichText.Add(infoReport.InitialHDP);
            var ouLabel = cellA2.RichText.Add(" Initial OU: ");
            var ouValue = cellA2.RichText.Add(infoReport.InitialOU);

            var goalLabel = cellA2.RichText.Add($"\n{infoReport.ReportOption}: ");
            var goalValue = cellA2.RichText.Add(infoReport.TeamType);
            var totalGoalLabel = cellA2.RichText.Add($" Total {infoReport.ReportOption}: ");
            var totalGoalValue = cellA2.RichText.Add(infoReport.Score);
            var redCardLabel = cellA2.RichText.Add($" Current RedCard: ");
            var redCardValue = cellA2.RichText.Add(infoReport.RedCard);

            cellA2.Style.VerticalAlignment = ExcelVerticalAlignment.Top;
            fromDateLabel.Bold = true;
            toDateLabel.Bold = true;
            leagueLabel.Bold = true;
            viewLabel.Bold = true;
            intervalLabel.Bold = true;
            hdpLabel.Bold = true;
            ouLabel.Bold = true;
            goalLabel.Bold = true;
            totalGoalLabel.Bold = true;
            redCardLabel.Bold = true;

            reportSheet.ApplyVertical(model.Reports, ReportConst.StartIndexRow);
        }
    }
}