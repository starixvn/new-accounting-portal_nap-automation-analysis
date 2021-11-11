namespace AutomationAnalysis.Websites
{
    using Fanex.Caching.Redis;
    using Microsoft.AspNetCore.DataProtection;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using StackExchange.Redis;

    public static class FanexCaching
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        public static IServiceCollection AddFanexCaching(this IServiceCollection services, IConfiguration configuration)
        {
            var redisConfig = configuration.GetSection("AuthSettings:RedisConfig").Value;
            var redis = ConnectionMultiplexer.Connect(redisConfig);

            services.AddDataProtection()
                .PersistKeysToStackExchangeRedis(redis, "Fanex.AutomationAnalysis-ProtectionKeys");

            services.AddStackExchangeRedisCache(options =>
            {
                options.Configuration = redisConfig;
                options.InstanceName = "Fanex.AutomationAnalysis.Session-";
            });

            services.AddRedisCache(configuration.GetSection("fanex.caching.redis"));

            return services;
        }
    }
}