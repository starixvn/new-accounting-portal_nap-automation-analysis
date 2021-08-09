using AutomationAnalysis.ISNOdds.Models;
using AutomationAnalysis.ISNOdds.Services;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using Xunit;

namespace AutomationAnalysis.ISNOdds.UnitTests
{
    public class ExportExcelServiceUnitTest
    {
        private readonly ExportExcelServiceImp exportExcel;
        private readonly ExcelWorksheet worksheet;

        public ExportExcelServiceUnitTest()
        {
            exportExcel = new ExportExcelServiceImp();
        }

        [Fact]
        public void CreateExcelPackage_Correct()
        {
            var directory = Directory.GetParent(Directory.GetCurrentDirectory()).Parent.Parent.FullName;
            var fileName = "MainReport.xlsx";

            var fileInfo = new ISNOddsExcelFileInfoModel
            {
                ReportOption = "Goal",
                FromDate = "10/01/2021",
                ToDate = "10/02/2021",
                League = "All",
                View = "Full Time",
                Interval = "5",
                FromInitialHDP = "-2",
                ToInitialHDP = " 2",
                FromInitialOU = "-2",
                ToInitialOU = "2",
                TeamType = "Home",
                TeamTypeTitle = "Goal:",
                CurrentGoalOrRedCard = "1-0",
                TotalGoalOrRedCard = "1-0",
                TotalGoalOrRedCardTitle = "Toal Goal",
                CurrentGoalOrRedCardTitle = "Current Red Card",
            };

            var list = new List<ISNOddsExcelReportModel>();

            var excelModel = new ISNOddsExcelModel
            {
                FileInfo = fileInfo,
                Reports = list
            };

            var actual = exportExcel.CreateExcelPackage(Path.Combine(directory, fileName), excelModel);
            var sheet = actual.Workbook.Worksheets[0];

            Assert.Equal("ISN Odds Data", sheet.Cells["A1"].Value);
            Assert.Equal("Goal", sheet.Cells["C1"].Value);
        }
    }
}