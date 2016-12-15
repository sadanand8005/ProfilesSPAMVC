using System.Web;
using System.Web.Optimization;

namespace ProfilesSPAMVC
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            #region UnusedScripts
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            #endregion

            // All the libraries related to angular js and various services used in this application
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/js/lib/angular.js",
                      "~/Scripts/js/lib/angular-animate.js",
                      "~/Scripts/js/lib/angular-resource.js",
                      "~/Scripts/js/lib/angular-route.js",
                      "~/Scripts/js/lib/angular-sanitize.js",
                      "~/Scripts/js/lib/ui-bootstrap-tpls.js",
                      "~/Scripts/js/lib/showdown.js"));

            // Common.js will have all the utility function and constants
            // angular-spa-demo.ngmin will have the SPA implementation
            bundles.Add(new ScriptBundle("~/bundles/application").Include(
                      "~/Scripts/js/app/Common.js",
                      "~/Scripts/js/app/app.js",
                      "~/Scripts/js/app/about.js",
                      "~/Scripts/js/app/home.js",
                      "~/Scripts/js/app/menu.js",
                      "~/Scripts/js/app/page.js",
                      "~/Scripts/js/app/profile.js",
                      "~/Scripts/js/app/resource.js"));

            // CSS for this application, prefer using bundle as it minifies automatically at run time.
            bundles.Add(new StyleBundle("~/Content/maincss").Include(
                     "~/Content/css/main.css"));

            #region UnUsedStyles
            bundles.Add(new StyleBundle("~/Content/css").Include(
                     "~/Content/bootstrap.css",
                     "~/Content/site.css"));
            #endregion
        }
    }
}
