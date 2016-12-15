using ProfilesSPAMVC.MockData;
using ProfilesSPAMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace ProfilesSPAMVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {

            return View();
        }

        public JsonResult Data()
        {
            HomeData homedata = new HomeData();
            List<String> contents = new List<string>();
            contents.Add("This mini-site is a demonstration of a [single-page application](http://en.wikipedia.org/wiki/Single-page_application) I am creating using AngularJS.");
            contents.Add("For a more complex page that illustrates responsive web design, see the [profiles](#/profiles) page.");
            contents.Add("I have listed a bunch of useful [resources](#/resources) I have found along the way.");
            contents.Add("And for further information describing technical capabilities this site illustrates, see [about](#/about).");
            contents.Add("**Note:** this is a work in progress.");

            homedata.markdownParagraphs = string.Join("</p><p>", contents);

            return Json(homedata, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Wrapper()
        {
            return Json(MockWrappers.GetHomeWrapper(), JsonRequestBehavior.AllowGet);
        }

    }
}