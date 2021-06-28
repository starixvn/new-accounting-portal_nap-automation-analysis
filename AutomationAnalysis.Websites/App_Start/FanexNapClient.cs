using Fanex.NAP.Client;
using Fanex.NAP.Client.Configuration;
using Fanex.NAP.Client.Helpers.Web;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace AutomationAnalysis.Websites.App_Start
{
    public static class FanexNapClient
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        public static IApplicationBuilder UseFanexNapClient(this IApplicationBuilder app)
        {
            NapClientManager
                .UseConfig(app.ApplicationServices.GetService<INapSettings>())
                .UseSession(app.ApplicationServices.GetService<INapSession>());

            return app;
        }

    }
}
