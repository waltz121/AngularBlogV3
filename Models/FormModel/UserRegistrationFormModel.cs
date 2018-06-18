using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularBlogV3.Models.FormModel
{
  public class UserRegistrationFormModel
  {
    public string userName { get; set; }
    public string password { get; set; }
    public string firstName { get; set; }
    public string lastName { get; set; }
    public DateTime birthDate { get; set; }
    public DateTime created { get; set; }
    public DateTime updated { get; set; }
    public string status { get; set; }
    public string email { get; set; }
  }
}
