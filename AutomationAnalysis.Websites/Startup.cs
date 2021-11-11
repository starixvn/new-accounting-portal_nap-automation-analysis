namespace AutomationAnalysis.Websites
{
    using CrossCuttingConcern;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;

    public class Startup
    {
        private const string AllowOrigin = "AllowOrigin";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages();
            services.AddAuthentication(Configuration);
            services.AddAuthorizationController();
            services.AddSession(Configuration);
            services.AddBussinessServices();
            services.AddCorsServices();
            services.AddFanexCaching(Configuration);
            services.AddFanexData(Configuration);
            services.AddFanexLogging(Configuration);
            services.AddFanexDI(Configuration);
            services.AddMediatorServices();
            services.AddAutoMapperServices();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public static void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();
            app.UseSession();
            app.UseRouting();
            app.UseMiddleware<ErrorHandler>();
            app.UseCors(AllowOrigin);
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseRazorPages();
            app.UseFanexAuth();
            app.UseFanexNapClient();
        }
    }
}