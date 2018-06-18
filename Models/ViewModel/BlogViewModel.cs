using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularBlogV3.Models.ViewModel
{
  public class BlogViewModel
  {
    public int id { get; set; }
    public string title { get; set; }
    public string body { get; set; }
    public int user_id { get; set; }
    public DateTime publish_date { get; set; }
    public bool allow_publish { get; set; }
    public DateTime created { get; set; }
    public DateTime updated { get; set; }
  }
}
