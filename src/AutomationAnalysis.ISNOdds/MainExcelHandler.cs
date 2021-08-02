using System;
using MediatR;
using OfficeOpenXml;

namespace AutomationAnalysis.ISNOdds
{
    using AutomationAnalysis.ISNOdds.Models;
    using AutomationAnalysis.ISNOdds.Services;
    using Microsoft.AspNetCore.Hosting;
    using System.Collections.Generic;
    using System.IO;
    using System.Threading;
    using System.Threading.Tasks;

    public class MainExcelRequest : IRequest<ExcelPackage>
    {
        public DateTime FromDate { get; set; }

        public DateTime ToDate { get; set; }

        public string League { get; set; }

        public string View { get; set; }

        public int Interval { get; set; }

        public decimal FromInitialHDP { get; set; }

        public decimal ToInitialHDP { get; set; }

        public decimal FromInitialOU { get; set; }

        public decimal ToInitialOU { get; set; }

        public int HomeScore { get; set; }

        public int AwayScore { get; set; }

        public int HomeRedCard { get; set; }

        public int AwayRedCard { get; set; }

        public string ReportOption { get; set; }

        public string TeamType { get; set; }

        public string FromMinute { get; set; }

        public string ToMinute { get; set; }
        public List<ISNOddsExcelReportModel> Reports { get; set; }
    }

    public class MainExcelHandler : IRequestHandler<MainExcelRequest, ExcelPackage>
    {
        private readonly ExportExcelService exportExcelService;
        private readonly IWebHostEnvironment hostEnvironment;

        public MainExcelHandler(ExportExcelService exportExcelService, IWebHostEnvironment hostEnvironment)
        {
            this.exportExcelService = exportExcelService;
            this.hostEnvironment = hostEnvironment;
        }

        public async Task<ExcelPackage> Handle(MainExcelRequest request, CancellationToken cancellationToken)
        {
            var templatePath = Path.Combine(hostEnvironment.ContentRootPath, "App_Data", "Templates", "TemplateExcel.xlsx");
            var isExist = File.Exists(templatePath);
            // object exportExcelModel = request.Reports;
            var excelPackage = exportExcelService.CreateExcelPackage(templatePath, request);

            return await Task.FromResult(excelPackage);
        }
    }
}