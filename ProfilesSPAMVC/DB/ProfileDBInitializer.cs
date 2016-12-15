using ProfilesSPAMVC.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ProfilesSPAMVC.DB
{
    public class ProfileDBInitializer : DropCreateDatabaseAlways<ProfileContext>
    {
        protected override void Seed(ProfileContext context)
        {
            IList<TitleDescription> defaultTitles = new List<TitleDescription>();

            Header _header;

            _header = new Header() { title = "Welcome", paragraphs = "AngularJS SPA Demo" };
            defaultTitles.Add(new TitleDescription() { PageName = "Home", title = "Home", header = _header });

            _header = new Header() { title = "Person Profiles", paragraphs = "This page demonstrates a slightly more complex (if contrived) AngularJS page implementation." };
            defaultTitles.Add(new TitleDescription() { PageName = "Profiles", title = "Home", header = _header });

            _header = new Header() { title = "Resources", paragraphs = "AngularJS Resources" };
            defaultTitles.Add(new TitleDescription() { PageName = "Resources", title = "Resources", header = _header });

            _header = new Header() { title = "About", paragraphs = "More information" };
            defaultTitles.Add(new TitleDescription() { PageName = "About", title = "About", header = _header });

            foreach (TitleDescription title in defaultTitles)
                context.TitleDescriptions.Add(title);



            base.Seed(context);
        }
    }
}