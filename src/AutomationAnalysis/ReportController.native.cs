using Microsoft.AspNetCore.Mvc;
using Fanex.NAP.Client.Helpers.Web;

namespace AutomationAnalysis
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportController : ControllerBase
    {
        private readonly INapSession session;

        public ReportController(INapSession session)
        {
            this.session = session;
        }

        [Route("")]
        public IActionResult Index()
        {
            return Ok();
        }
    }
}