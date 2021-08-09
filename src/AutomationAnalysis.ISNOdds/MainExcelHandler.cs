using System;
using MediatR;
using OfficeOpenXml;
using AutomationAnalysis.ISNOdds.Models;
using AutomationAnalysis.ISNOdds.Services;
using Microsoft.AspNetCore.Hosting;
using System.Collections.Generic;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;

namespace AutomationAnalysis.ISNOdds
{
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
        public string Score => $"{HomeScore}-{AwayScore}";
        public string RedCard => $"{HomeRedCard}-{AwayRedCard}";
        public List<ISNOddsExcelReportModel> Reports { get; set; }
        public IList<ISNOddsExcelReportDetailModel> ReportDetails { get; set; }
    }

    public class MainExcelHandler : IRequestHandler<MainExcelRequest, ExcelPackage>
    {
        private readonly ExportExcelService exportExcelService;
        private readonly IWebHostEnvironment hostEnvironment;
        private readonly IMapper mapper;

        public MainExcelHandler(ExportExcelService exportExcelService, IWebHostEnvironment hostEnvironment, IMapper mapper)
        {
            this.exportExcelService = exportExcelService;
            this.hostEnvironment = hostEnvironment;
            this.mapper = mapper;
        }

        public async Task<ExcelPackage> Handle(MainExcelRequest request, CancellationToken cancellationToken)
        {
            var fileName = request.ReportDetails != null ? "DrilldownReport.xlsx" : "MainReport.xlsx";
            var absolutePath = Path.Combine("App_Data", "Templates", fileName);
            var templatePath = Path.Combine(hostEnvironment.ContentRootPath, absolutePath);
            var fileInfoModel = mapper.Map<ISNOddsExcelFileInfoModel>(request);

            var isnOddsExcelModel = new ISNOddsExcelModel
            {
                FileInfo = fileInfoModel,
                Reports = request.Reports,
                ReportDetails = request.ReportDetails
            };

            var excelPackage = exportExcelService.CreateExcelPackage(templatePath, isnOddsExcelModel);

            return await Task.FromResult(excelPackage);
        }
    }
}