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
    [RoutePrefix("Profiles")]
    public class ProfileController : ApiController
    {
        [Route("Wrapper")]
        public IHttpActionResult GetProfileWrapper()
        {
            return Ok(MockWrappers.GetProfileWrapper());
        }

        [Route("Data")]
        public IHttpActionResult GetProfiles()
        {
            return Ok(MockProfiles.GetProfiles());
        }

    }
}
