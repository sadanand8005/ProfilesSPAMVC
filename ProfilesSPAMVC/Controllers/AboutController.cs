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
    public class AboutController : Controller
    {
        
        public JsonResult Wrapper()
        {
            return Json(MockWrappers.GetAboutWrapper(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult Data()
        {
            Resource resources = new Resource();
            resources.paragraphs = "I am developing this mini-site to learn AngularJS, and to showcase what I have learned.";

            return Json(resources, JsonRequestBehavior.AllowGet);
        }

        public PartialViewResult MainView()
        {
            return PartialView();
        }

    }
}
