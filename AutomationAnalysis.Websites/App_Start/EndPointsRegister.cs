namespace AutomationAnalysis.Websites
{
    using Microsoft.AspNetCore.Builder;

    public static class EndPointsRegister
    {
        public static IApplicationBuilder UseFanexAuth(this IApplicationBuilder app)
        {
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "FanexAuth",
                    pattern: "Auth/{action=Index}",
                    defaults: new { controller = "Auth" });
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "FanexSSO",
                    pattern: "UserLogin/SSO",
                    defaults: new { controller = "UserLogin", action = "SSO", });
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "FanexError",
                    pattern: "Err/NotFound",
                    defaults: new { controller = "UserLogin", action = "SSO", });
            });

            return app;
        }

        public static IApplicationBuilder UseRazorPages(this IApplicationBuilder app)
        {
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
            });

            return app;
        }
    }
}