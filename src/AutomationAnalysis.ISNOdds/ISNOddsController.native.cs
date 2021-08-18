using AutomationAnalysis.ISNOdds.Constant;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace AutomationAnalysis.ISNOdds
{
    [Route("api/isn-odds")]
    [ApiController]
    public class ISNOddsController : ControllerBase
    {
        private readonly IMediator mediator;

        public ISNOddsController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [Route("excel")]
        [HttpPost]
        public async Task<IActionResult> Excel(MainExcelRequest request)
        {
            var contentFile = await mediator.Send(request);
            return File(contentFile, FileContentType.EXCEL);
        }
    }
}