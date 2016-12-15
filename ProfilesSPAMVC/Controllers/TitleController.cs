using ProfilesSPAMVC.DB;
using ProfilesSPAMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProfilesSPAMVC.Controllers
{
    public class TitleController : ApiController
    {
        ProfileContext db = new ProfileContext();

        // GET api/<controller>
        public IEnumerable<TitleDescription> Get()
        {
            return db.TitleDescriptions.Include("Header").ToList();
        }

        // GET api/<controller>/5
        public TitleDescription Get(int id)
        {
            return db.TitleDescriptions.Include("Header").Where(item => item.PageId == id).FirstOrDefault();
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}