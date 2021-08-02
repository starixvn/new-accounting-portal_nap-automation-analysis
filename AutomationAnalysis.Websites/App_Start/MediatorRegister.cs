namespace AutomationAnalysis.Websites
{
    using System.Reflection;
    using ISNOdds;
    using MediatR;
    using Microsoft.Extensions.DependencyInjection;

    public static class MediatorRegister
    {
        public static IServiceCollection AddMediatorServices(this IServiceCollection services)
        {
            services.AddMediatR(typeof(ISNOddsController).GetTypeInfo().Assembly);

            return services;
        }
    }
}
