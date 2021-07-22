using Microsoft.AspNetCore.Mvc;
using Fanex.NAP.Client.Helpers.Web;
using System;
using System.IO;
using AutomationAnalysis.Utils;
using AutomationAnalysis.Models;

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
        public IActionResult Index([FromQuery] Filter filter)
        {
            var file = FileUtil.GetFileInfo(Path.Combine("wwwroot", "data", "report.json"));
            var data = System.IO.File.ReadAllText(file.FullName);
            return Ok(data);
        }
    }
}