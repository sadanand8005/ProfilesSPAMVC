using ProfilesSPAMVC.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ProfilesSPAMVC.DB
{
    public class ProfileContext : DbContext 
    {
        public ProfileContext()
            : base("ProfileServiceContext")
        {
            Database.SetInitializer(new ProfileDBInitializer());
        }

        public DbSet<Header> Headers { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Data> Datas { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Link> Links { get; set; }
        public DbSet<Resource> Resources { get; set; }
        public DbSet<TitleDescription> TitleDescriptions { get; set; }
    }
}