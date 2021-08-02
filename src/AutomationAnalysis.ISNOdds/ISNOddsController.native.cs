using System.IO;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;

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
            var excelPackage = await mediator.Send(request);
            await using var stream = new MemoryStream();
            await excelPackage.SaveAsAsync(stream);
            var content = stream.ToArray();

            return File(
                content,
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "users.xlsx");
        }
    }
}