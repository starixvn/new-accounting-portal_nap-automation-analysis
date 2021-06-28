using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using StackExchange.Redis;


namespace AutomationAnalysis.Websites.App_Start
{
    public static class AuthServices
    {
        public static IServiceCollection AddAuthentication(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie(options =>
                {
                    options.LoginPath = configuration.GetSection("AuthSettings:LoginPath").Value;
                    options.LogoutPath = configuration.GetSection("AuthSettings:LogoutPath").Value;
                    options.ExpireTimeSpan = TimeSpan.FromMinutes(int.Parse(configuration.GetSection("AuthSettings:CookieTimeOut").Value));
                    options.Cookie = new CookieBuilder
                    {
                        Name = "Fanex.AutomationAnalysis.Cookie",
                        SecurePolicy = CookieSecurePolicy.SameAsRequest
                    };
                    options.Events.OnSigningOut = context =>
                    {
                        context.Response.Redirect(options.LoginPath);
                        return Task.CompletedTask;
                    };
                });

            return services;
        }

        public static IServiceCollection AddAuthorizationController(this IServiceCollection services)
        {
            services.AddControllers(config =>
            {
                var policy = new AuthorizationPolicyBuilder()
                    .RequireAuthenticatedUser()
                    .Build();
                config.Filters.Add(new AuthorizeFilter(policy));
            });
            services.AddControllersWithViews()
                .AddNewtonsoftJson(options =>
                    {
                        options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                    }
                );

            return services;
        }

        public  static  IServiceCollection AddSession(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSession(options =>
            {
                options.Cookie.IsEssential = true;
                options.IdleTimeout = TimeSpan.FromMinutes(int.Parse(configuration.GetSection("AuthSettings:SessionTimeOut").Value));
                options.Cookie.Name = "Fanex.AutomationAnalysis.Session";
            });

            return services;
        }
    }
}
