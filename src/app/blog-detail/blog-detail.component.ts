//Angular
import { Component, OnInit, Input } from '@angular/core';

//Class
import { BlogPost } from '../class/blogPost';

//Services
import { BlogService } from '../services/blog.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})

export class BlogDetailComponent implements OnInit {

  constructor(
    private blogService: BlogService,
    private loginService: LoginService
  ) {
  }

  title = 'Blog Details';

  @Input() blogPost: BlogPost;


  ngOnInit() {
  }

  submit() {
    this.blogService.saveBlog(this.blogPost)
      .subscribe(() => this.refresh());
  }

  refresh(): void {
    console.log("Saving Finished");
  }
}
