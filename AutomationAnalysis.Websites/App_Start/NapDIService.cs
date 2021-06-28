using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace AutomationAnalysis.Websites.App_Start
{
    public static class NapDIService
    {
        public static IServiceCollection AddDependencyInjection(this IServiceCollection services)
        {
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            
            return services;
        }
    }
}
