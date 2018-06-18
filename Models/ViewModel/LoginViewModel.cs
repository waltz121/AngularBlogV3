using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularBlogV3.Models.ViewModel
{
  public class LoginViewModel
  {
    public bool IsCorrectLogin { get; set; }
    public string userName { get; set; }
    public string passWord { get; set; }

    public bool successLogin { get; set; }
    public int userID { get; set; }
  }
}
