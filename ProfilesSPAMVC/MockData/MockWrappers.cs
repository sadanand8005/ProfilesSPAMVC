using ProfilesSPAMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProfilesSPAMVC.MockData
{
    public class MockWrappers
    {
        public static TitleDescription GetProfileWrapper()
        {
            TitleDescription wrapper = new TitleDescription();
            wrapper.title = "Profiles";
            wrapper.header = new Header();
            wrapper.header.title = "Person Profiles";
            wrapper.header.paragraphs = "This page demonstrates a slightly more complex (if contrived) AngularJS page implementation.";

            return wrapper;
        }

        public static TitleDescription GetHomeWrapper()
        {
            TitleDescription wrapper = new TitleDescription();
            wrapper.title = "Home";
            wrapper.header = new Header();
            wrapper.header.title = "Welcome";
            wrapper.header.paragraphs = "AngularJS SPA Demo";

            return wrapper;
        }

        public static TitleDescription GetResourceWrapper()
        {
            TitleDescription wrapper = new TitleDescription();
            wrapper.title = "Resources";
            wrapper.header = new Header();
            wrapper.header.title = "Resources";
            wrapper.header.paragraphs = "AngularJS Resources";

            return wrapper;
        }

        public static TitleDescription GetAboutWrapper()
        {
            TitleDescription wrapper = new TitleDescription();
            wrapper.title = "About";
            wrapper.header = new Header();
            wrapper.header.title = "About";
            wrapper.header.paragraphs = "More information";

            return wrapper;
        }
    }
}