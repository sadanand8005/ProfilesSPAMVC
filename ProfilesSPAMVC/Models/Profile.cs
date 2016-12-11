using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProfilesSPAMVC.Models
{
    public class Profile
    {
        public Name name { get; set; }
        public Data data { get; set; }
    }

    public class Name
    {
        public string first { get; set; }
        public string last { get; set; }
    }

    public class Data
    {
        public Image image { get; set; }
        public List<Link> links { get; set; }
        public List<string> blurb { get; set; }
        public List<string> skillsMatrix { get; set; }
    }

    public class Image
    {
        public string source;
        public string alt;
        public string title;
    }

    public class Link
    {
        public Link(string text, string url)
        {
            this.text = text;
            this.url = url;
        }
        public string text;
        public string url;
    }
}