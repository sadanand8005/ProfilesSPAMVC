using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ProfilesSPAMVC.Models
{
    [Table("Titles")]
    public class TitleDescription
    {
        [Key]
        public int PageId { get; set; }
        public string PageName { get; set; }
        public string title { get; set; }
        public int HeaderId { get; set; }

        [ForeignKey("HeaderId")]
        public Header header { get; set; }
    }
}