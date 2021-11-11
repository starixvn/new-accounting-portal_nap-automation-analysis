using AutomationAnalysis.ISNOdds;
using Microsoft.Extensions.DependencyInjection;

namespace AutomationAnalysis.Websites
{
    public static class AutoMapperRegister
    {
        public static IServiceCollection AddAutoMapperServices(this IServiceCollection services)
        {
            //Mapper.Initialize(cfg => cfg.AddProfile<MappingProfile>());
            services.AddAutoMapper(typeof(Startup), typeof(ISNOddsProfile));
            return services;
        }
    }
}