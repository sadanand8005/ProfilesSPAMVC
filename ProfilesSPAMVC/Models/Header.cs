using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ProfilesSPAMVC.Models
{
    [Table("Header")]
    public class Header
    {
        [Key]
        public int HeaderId { get; set; }
        public string title { get; set; }
        public string paragraphs { get; set; }
    }
}