using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Text;

namespace AutomationAnalysis.Websites.Controllers
{
    [Route("/app")]
    public class AppController : Controller
    {
        private readonly IWebHostEnvironment hostEnvironment;

        private static string indexHtml;

        public AppController(IWebHostEnvironment hostEnvironment)
        {
            this.hostEnvironment = hostEnvironment;
        }

        [Route("{*path}")]
        [HttpGet]
        public IActionResult Index()
        {
            var html = GetIndexHtml(hostEnvironment);
            return Content(html, "text/html", Encoding.UTF8);
        }

        private static string GetIndexHtml(IWebHostEnvironment hostEnvironment)
        {
            if (indexHtml == null)
            {
                var htmlFile = Path.Combine(hostEnvironment.ContentRootPath, "wwwroot", "app", "index.html");
                indexHtml = System.IO.File.ReadAllText(htmlFile);
            }

            return indexHtml;
        }
    }
}
