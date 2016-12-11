using ProfilesSPAMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProfilesSPAMVC.MockData
{
    public class MockWrappers
    {
        public static Wrapper GetProfileWrapper()
        {
            Wrapper wrapper = new Wrapper();
            wrapper.title = "Profiles";
            wrapper.header = new Header();
            wrapper.header.title = "Person Profiles";
            wrapper.header.paragraphs = new List<string>();
            wrapper.header.paragraphs.Add("This page demonstrates a slightly more complex (if contrived) AngularJS page implementation.");

            return wrapper;
        }

        public static Wrapper GetHomeWrapper()
        {
            Wrapper wrapper = new Wrapper();
            wrapper.title = "Home";
            wrapper.header = new Header();
            wrapper.header.title = "Welcome";
            wrapper.header.paragraphs = new List<string>();
            wrapper.header.paragraphs.Add("AngularJS SPA Demo");

            return wrapper;
        }

        public static Wrapper GetResourceWrapper()
        {
            Wrapper wrapper = new Wrapper();
            wrapper.title = "Resources";
            wrapper.header = new Header();
            wrapper.header.title = "Resources";
            wrapper.header.paragraphs = new List<string>();
            wrapper.header.paragraphs.Add("AngularJS Resources");

            return wrapper;
        }

        public static Wrapper GetAboutWrapper()
        {
            Wrapper wrapper = new Wrapper();
            wrapper.title = "About";
            wrapper.header = new Header();
            wrapper.header.title = "About";
            wrapper.header.paragraphs = new List<string>();
            wrapper.header.paragraphs.Add("More information");

            return wrapper;
        }
    }
}