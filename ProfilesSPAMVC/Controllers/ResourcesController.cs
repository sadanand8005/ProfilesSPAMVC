using ProfilesSPAMVC.MockData;
using ProfilesSPAMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProfilesSPAMVC.Controllers
{
    public class ResourcesController : ApiController
    {
        [Route("Resources/Wrapper")]
        public IHttpActionResult GetResourceWrapper()
        {
            return Ok(MockWrappers.GetResourceWrapper());
        }

        [Route("Resources/Data")]
        public IHttpActionResult GetResourceData()
        {
            Resources resources = new Resources();
            
            string[] _paragraphs = new string[] { 
                "I've spent a lot of time researching AngularJS.",
                "Here are some of the most useful resources I have found."
            };

            resources.paragraphs = _paragraphs.ToList();

            return Ok(resources);
        }

    }
}
