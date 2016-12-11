using ProfilesSPAMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProfilesSPAMVC.MockData
{
    public class MockProfiles
    {
        public static List<Profile> GetProfiles()
        {
            List<Profile> profiles = new List<Profile>();
            Profile _profile;
            Name _name;
            Data _data;
            Image _image;
            List<Link> _links;
            string[] _blurbs;
            string[] _skillsMatrix;


            /////////////////////////////////////
            _profile = new Profile();

            _name = new Name();
            _profile.name = _name;
            _name.first = "Richard";
            _name.last = "Branson";

            _image = new Image();
            _data = new Data();
            _profile.data = _data;

            _data.image = _image;
            _image.source = "Content/img/thm/richard-branson.jpg";
            _image.alt = _image.title = string.Empty;

            _links = new List<Link>();
            _data.links = _links;

            _links.Add(new Link("LinkedIn", "http://www.linkedin.com/in/rbranson"));
            _links.Add(new Link("website", "http://www.linkedin.com/in/rbranson"));
            _links.Add(new Link("email", "mailto:richard.branson@example.com"));

            _blurbs = new string[] {
                "Sir Richard Branson is an iconic and legendary figure within business circles.",
                "His Virgin companies span the globe, while his thirst for brand domination and sense of adventure tell a story of an intriguing and thought provoking life sprinkled with danger, high risk tactics &ndash; pushing the boundaries of the possible &ndash; and an all encompassing purpose that is built upon fairness and change.",
                "Add to this mix a charismatic persona and an extraordinary business acumen, and you have one of the most well-known and iconic figures of today’s business world. <a href='http://blog.iqmatrix.com/richard-branson' target='_blank'><small>[source]</small></a>"
            };

            _data.blurb = _blurbs.ToList();

            _skillsMatrix = new string[]{
                "Flexible thought",
                "Sales skills",
                "Public relations",
                "Negotiation skills",
                "Persuasion skills",
                "Leadership skills",
                "Good listening skills",
                "Good communication skills"
            };

            _data.skillsMatrix = _skillsMatrix.ToList();

            profiles.Add(_profile);

            /////////////////////////////////////
            _profile = new Profile();

            _name = new Name();
            _profile.name = _name;
            _name.first = "Barack";
            _name.last = "Obama";

            _image = new Image();
            _data = new Data();
            _profile.data = _data;

            _data.image = _image;
            _image.source = "Content/img/thm/barack-obama.jpg";
            _image.alt = _image.title = string.Empty;

            _links = new List<Link>();
            _data.links = _links;

            _links.Add(new Link("LinkedIn", "http://www.linkedin.com/in/barackobama"));
            _links.Add(new Link("Twitter", "https://twitter.com/barackobama"));
            _links.Add(new Link("website", "http://www.barackobama.com/"));
            _links.Add(new Link("email", "mailto:barack.obama@example.com"));

            _blurbs = new string[] {
                 "Barack Obama is undoubtedly one of the greatest influencers of modern times.",
                "His accomplishment in going from a relative unknown to the most talked about person on the planet in less than 18 months provides a lot of valuable lessons to anyone marketing a product, a service&hellip; or a person. <a href='http://marketingwizdom.com/archives/1952' target='_blank'><small>[source]</small></a>"
             };

            _data.blurb = _blurbs.ToList();

            _skillsMatrix = new string[]{
                "Trust",
                "Presence",
                "Credibility",
                "Herd instinct",
                "Avoiding loss",
                "Building commitment",
                "Story telling"
            };

            _data.skillsMatrix = _skillsMatrix.ToList();

            profiles.Add(_profile);


            //////////////////////////////////////////
            _profile = new Profile();

            _name = new Name();
            _profile.name = _name;
            _name.first = "Marissa";
            _name.last = "Mayer";

            _image = new Image();
            _data = new Data();
            _profile.data = _data;

            _data.image = _image;
            _image.source = "Content/img/thm/marissa-mayer.jpg";
            _image.alt = _image.title = string.Empty;

            _links = new List<Link>();
            _data.links = _links;

            _links.Add(new Link("LinkedIn", "http://www.linkedin.com/profile/view?id=55365&authType=name&authToken=DR3J"));
            _links.Add(new Link("website", "http://www.yahoo.com/"));
            _links.Add(new Link("email", "mailto:marissa.mayer@example.com"));

            _blurbs = new string[] {
                "Mayer joined Google in 1999 as its 20th employee &ndash; and its first female engineer &ndash; when the company was just a no-frills search page.",
                "Over 13 years at Mountain View, she has become a much-admired figure in the technology world.",
                "Unlike some of her former colleagues, Mayer does not have one Google product that is known as hers.",
                "Rather, she is present in all major Google services developed over the company's first transformative decade. <a href='http://www.guardian.co.uk/technology/2012/jul/17/google-marissa-mayer-yahoo-profile' target='_blank'><small>[source]</small></a>"
            };

            _data.blurb = _blurbs.ToList();

            _skillsMatrix = new string[]{
                "incredibly smart",
                "confident",
                "loves finding better ways to do things",
                "intolerant of sloppy work",
                "makes decisions based on data",
                "invented Google AdWords"
            };

            _data.skillsMatrix = _skillsMatrix.ToList();

            profiles.Add(_profile);


            ///////////////////////////////////////
            _profile = new Profile();

            _name = new Name();
            _profile.name = _name;
            _name.first = "Hillary";
            _name.last = "Clinton";

            _image = new Image();
            _data = new Data();
            _profile.data = _data;

            _data.image = _image;
            _image.source = "Content/img/thm/hillary-clinton.jpg";
            _image.alt = _image.title = string.Empty;

            _links = new List<Link>();
            _data.links = _links;

            _links.Add(new Link("LinkedIn", "http://www.linkedin.com/profile/view?id=15890911&authType=name&authToken=-_z2"));

            _blurbs = new string[] {
                 "Hillary Clinton should have her chance at the presidency in 2016.",
                "Not only because a lot of the public would like certain parts of the 1990s back, most of which have gone into serious decline over the past 12 years under two different administrations.",
                "Or because Clinton's track record includes true bona fides when it comes to building consensus and bringing opposing sides to the table while standing tough and refusing to give away the farm.",
                "She deserves a shot because she possesses three skills crucial to the office of the president: making lemonade out of life's many lemons, learning from her mistakes and taking the heat. <a href='http://www.guardian.co.uk/commentisfree/2012/sep/25/hillary-clinton-deserves-shot-at-presidency' target='_blank'><small>[source]</small></a>"
            };

            _data.blurb = _blurbs.ToList();

            _skillsMatrix = new string[]{
                "tough",
                "makes lemonade out of lemons",
                "learns from her mistakes",
                "takes the heat",
                "popular"
            };

            _data.skillsMatrix = _skillsMatrix.ToList();

            profiles.Add(_profile);


            ///////////////////////////////////////////
            _profile = new Profile();

            _name = new Name();
            _profile.name = _name;
            _name.first = "Humphrey B.";
            _name.last = "Bear";

            _image = new Image();
            _data = new Data();
            _profile.data = _data;

            _data.image = _image;
            _image.source = "Content/img/thm/humphrey.b.bear.jpg";
            _image.alt = "This guy has no overview and no skills. And no trousers.";
            _image.title = string.Empty;

            _links = new List<Link>();
            _data.links = _links;
            
            profiles.Add(_profile);

            return profiles;
        }
    }
}