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
            AddFileInfo(model.FileInfo);
            ChangeISNOddsTableHead(model.FileInfo);
            if (model.ReportDetails != null)
            {
                reportSheet.ApplyVertical(model.ReportDetails, ReportConst.StartIndexRow);
            }
            else
            {
                reportSheet.ApplyVertical(model.Reports, ReportConst.StartIndexRow);
            }
            reportSheet.Cells[reportSheet.Dimension.Address].AutoFitColumns();
        }

        public void AddFileInfo(ISNOddsExcelFileInfoModel infoModel)
        {
            var titleCell = reportSheet.Cells[ReportConst.ReportTitleCell];
            titleCell.RichText.Add(infoModel.ReportOptionTitle).Bold = true;

            var fileInfoCell = reportSheet.Cells[ReportConst.FileInfoCell];
            var fromDateTitle = fileInfoCell.RichText.Add(infoModel.FromDateTitle);
            fileInfoCell.RichText.Add(infoModel.FromDate);
            var toDateTitle = fileInfoCell.RichText.Add(infoModel.ToDateTitle);
            fileInfoCell.RichText.Add(infoModel.ToDate);
            var leagueTitle = fileInfoCell.RichText.Add(infoModel.LeagueTitle);
            fileInfoCell.RichText.Add(infoModel.League);
            var viewTitle = fileInfoCell.RichText.Add(infoModel.ViewTitle);
            fileInfoCell.RichText.Add(infoModel.View);
            var intervalTitle = fileInfoCell.RichText.Add(infoModel.IntervalTitle);
            fileInfoCell.RichText.Add(infoModel.Interval);
            var hdpTitle = fileInfoCell.RichText.Add(infoModel.InitialHDPTitle);
            fileInfoCell.RichText.Add(infoModel.InitialHDP);
            var ouTitle = fileInfoCell.RichText.Add(infoModel.InitialOUTitle);
            fileInfoCell.RichText.Add(infoModel.InitialOU);
            var goalTitle = fileInfoCell.RichText.Add($"\n{infoModel.ReportOption}: ");
            fileInfoCell.RichText.Add(infoModel.TeamType);
            var totalGoalOrRedCardTitle = fileInfoCell.RichText.Add(infoModel.TotalGoalOrRedCardTitle);
            fileInfoCell.RichText.Add(infoModel.TotalGoalOrRedCard);
            var currentGoalOrRedCardTitle = fileInfoCell.RichText.Add(infoModel.CurrentGoalOrRedCardTitle);
            fileInfoCell.RichText.Add(infoModel.CurrentGoalOrRedCard);

            fileInfoCell.Style.VerticalAlignment = ExcelVerticalAlignment.Top;
            fromDateTitle.Bold = true;
            toDateTitle.Bold = true;
            leagueTitle.Bold = true;
            viewTitle.Bold = true;
            intervalTitle.Bold = true;
            hdpTitle.Bold = true;
            ouTitle.Bold = true;
            goalTitle.Bold = true;
            totalGoalOrRedCardTitle.Bold = true;
            currentGoalOrRedCardTitle.Bold = true;
        }

        public void ChangeISNOddsTableHead(ISNOddsExcelFileInfoModel infoModel)
        {
            reportSheet.Cells[ReportConst.BeforeModeCell].Value = "Before " + infoModel.ReportOption;
            reportSheet.Cells[ReportConst.AfterModeCell].Value = "After " + infoModel.ReportOption;
        }
    }
}