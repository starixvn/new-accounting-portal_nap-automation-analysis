using System;
using MediatR;
using OfficeOpenXml;

namespace AutomationAnalysis.ISNOdds
{
    using System.Threading;
    using System.Threading.Tasks;

    public class MainExcelRequest : IRequest<ExcelPackage>
    {
        public DateTime FromDate { get; set; }

        public DateTime ToDate { get; set; }

        public string League { get; set; }

        public bool View { get; set; }

        public int Interval { get; set; }

        public decimal FromInitialHDP { get; set; }

        public decimal ToInitialHDP { get; set; }

        public decimal FromInitialOU { get; set; }

        public decimal ToInitialOU { get; set; }

        public int HomeScore { get; set; }

        public int AwayScore { get; set; }

        public int HomeRedCard { get; set; }

        public int AwayRedCard { get; set; }

        public int Mode { get; set; }

        public int TeamType { get; set; }

        public string FromMinute { get; set; }

        public string ToMinute { get; set; }
    }

    public class MainExcelHandler : IRequestHandler<MainExcelRequest, ExcelPackage>
    {
        public Task<ExcelPackage> Handle(MainExcelRequest request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
