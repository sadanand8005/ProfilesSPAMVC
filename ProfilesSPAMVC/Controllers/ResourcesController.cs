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
            Resource resources = new Resource();

            resources.paragraphs = "I've spent a lot of time researching AngularJS. </p><p> Here are some of the most useful resources I have found.";

            return Ok(resources);
        }

    }
}
