using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ProfilesSPAMVC.Models
{
    [Table("Profile")]
    public class Profile
    {
        [Key]
        public int ProfileId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int DataId { get; set; }
        public int ImageId { get; set; }
        
        [ForeignKey("DataId")]
        public Data data { get; set; }

        [ForeignKey("ImageId")]
        public Image image { get; set; }
    }

    [Table("Data")]
    public class Data
    {
        [Key]
        public int DataId { get; set; }
        public int ProfileId { get; set; }
        public ICollection<Link> links { get; set; }
        public string blurb { get; set; }
        public ICollection<Skill> skillsMatrix { get; set; }
    }

    [Table("Skill")]
    public class Skill
    {
        [Key]
        public int SkillId { get; set; }
        public int DataId { get; set; }
        public string skill { get; set; }
    }

    [Table("Image")]
    public class Image
    {
        [Key]
        public int ImageId { get; set; }
        public int ProfileId { get; set; }
        public string source;
        public string alt;
        public string title;
    }

    [Table("Link")]
    public class Link
    {
        public Link(string text, string url)
        {
            this.text = text;
            this.url = url;
        }

        [Key]  
        public int LinkId { get; set; }
        public string text;
        public string url;
    }
}