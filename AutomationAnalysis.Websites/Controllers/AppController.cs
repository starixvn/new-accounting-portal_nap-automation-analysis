namespace AutomationAnalysis.Websites.Controllers
{
    using System;
    using System.IO;
    using System.Net;
    using System.Net.Sockets;
    using System.Text;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Mvc;

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

        [Route("test")]
        [HttpGet]
        public IActionResult GetIp()
        {
            var hostname = Dns.GetHostName();
            var log = $"Hostname: {hostname}\n";
            IPHostEntry hostEntry = null;
            try
            {
                hostEntry = Dns.GetHostEntry(hostname);
            }
            catch (Exception e)
            {
                log += $"Error when get host entry: {e.Message}\n";
            }

            var ip = GetMachineIP(hostEntry);
            log += $"IP:{ip}\n";
            return Content(log);
        }

        static string GetMachineIP(IPHostEntry hostEntry)
        {
            foreach (var ip in hostEntry.AddressList)
            {
                if (ip.AddressFamily == AddressFamily.InterNetwork)
                {
                    return ip.ToString();
                }
            }

            return "1.1.1.1";
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
