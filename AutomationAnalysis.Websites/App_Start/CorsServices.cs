using Microsoft.Extensions.DependencyInjection;

namespace AutomationAnalysis.Websites.App_Start
{
    public static class CorsServices
    {
        private const string AllowOrigin = "AllowOrigin";

        public static IServiceCollection AddCorsServices(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(AllowOrigin,
                    builder =>
                    {
                        builder.WithOrigins("https://localhost:44380")
                            .AllowAnyMethod()
                            .AllowAnyHeader()
                            .AllowCredentials();
                    });
            });

            return services;
        }
    }
}