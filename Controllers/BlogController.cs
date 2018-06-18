using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularBlogV3.Models;
using AngularBlogV3.Models.ViewModel;
using System.Data.Entity;
using System.Web.Http.Cors;

namespace AngularBlogV3.Controllers
{
    public class BlogController : ApiController
    {
    [HttpPost]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public HttpResponseMessage saveBlogInfo([FromBody]Blog blogFM)
        {
          using (BlogEntities entities = new BlogEntities())
          {
            if (blogFM.id == 0)
            {
              entities.Blogs.Add(blogFM);
            }
            else
            {
              entities.Entry(blogFM).State = EntityState.Modified;
            }

            entities.SaveChanges();
          }

          return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<BlogViewModel> getAllBlogPosts()
        {
          using (BlogEntities entities = new BlogEntities())
          {

            var resultList = from blog in entities.Blogs.ToList()
                             select new BlogViewModel
                             {
                               id = blog.id,
                               title = blog.title,
                               body = blog.body,
                               user_id = blog.user_id,
                               publish_date = blog.publish_date.Value,
                               allow_publish = blog.allow_publish.Value,
                               created = blog.created.Value,
                               updated = blog.updated.Value
                             };

            var vm = resultList.ToList();

            return vm;
          }
        }

    [HttpPut]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public HttpResponseMessage deleteBlog(int id)
        {
          using (BlogEntities entities = new BlogEntities())
          {
            var tmpBlog = entities.Blogs.Where(x => x.id == id).FirstOrDefault();

            entities.Blogs.Remove(tmpBlog);
            entities.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
          }
        }
  }
}
