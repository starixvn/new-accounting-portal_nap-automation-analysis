namespace AutomationAnalysis.Websites
{
    using ISNOdds;
    using MediatR;
    using Microsoft.Extensions.DependencyInjection;
    using System.Reflection;

    public static class MediatorRegister
    {
        public static IServiceCollection AddMediatorServices(this IServiceCollection services)
        {
            services.AddMediatR(typeof(ISNOddsController).GetTypeInfo().Assembly);

            return services;
        }
    }
}