using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularBlogV3.Models.ViewModel
{
  public class UserViewModel
  {
    public int id { get; set; }
    public string name { get; set; }
    public string lastname { get; set; }
    public Nullable<System.DateTime> birthdate { get; set; }
    public Nullable<System.DateTime> created { get; set; }
    public Nullable<System.DateTime> updated { get; set; }
    public string status { get; set; }
    public string email { get; set; }
  }
}
