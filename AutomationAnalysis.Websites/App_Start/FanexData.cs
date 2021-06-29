using Fanex.Data;
using Fanex.Data.SqlServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;

namespace AutomationAnalysis.Websites.App_Start
{
    public static class FanexData
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        public static IServiceCollection AddFanexData(this IServiceCollection services, IConfiguration configuration)
        {
            var connections = configuration.GetSection("ConnectionStrings")
                .GetChildren()
                .AsEnumerable()
                .ToDictionary(
                    x => x.GetValue<string>("Name"),
                    y => new ConnectionConfiguration(y.GetValue<string>("Name"), y.GetValue<string>("ConnectionString"), y.GetValue<string>("ProviderName"))
                );

            DbSettingProviderManager
                .StartNewSession()
                .Use(connections)
                .WithSqlServer()
                .UseDefaultDbSettingProvider(resourcePath: "~/App_Data/Fanex.Data")
                .Run();

            return services;
        }
    }
}