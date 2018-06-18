/// <reference path="../../../scripts/typings/jquery/jquery.d.ts" />
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../class/blogPost';
import { BlogEditRenderer } from '../utils/blog-edit-renderer.component';
import { LoginService } from '../services/login.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  private gridApi: any;
  private gridColumnApi: any;
  private frameworkComponents: any;
  private context: any;

  blogPosts: BlogPost[];

  constructor(
    private blogService: BlogService,
    private loginService: LoginService
  ) {
    this.frameworkComponents = {
      blogEditRenderer: BlogEditRenderer
    };
    this.context = { componentParent: this };
  }

  isCreatingBlog = false;

  title = 'Blog Posts Admin Tool';

  blogPost: BlogPost = {
    id: 0,
    title: "",
    body: "",
    user_id: this.loginService.currentUserLoginInfo.userID,
    publish_date: new Date(),
    allow_publish: false,
    created: new Date(),
    updated: new Date()
  }

  columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Body', field: 'body' },
    { headerName: 'Publish Date', field: 'publish_date' },
    { headerName: 'Allow Publish', fields: 'allow_publish' },
    { headerName: 'Created', fields: 'created' },
    {
      headerName: 'Edit / Delete',
      fields: 'value',
      cellRenderer: "blogEditRenderer",
      colId: "params"
    }
  ];

  ngOnInit() {
    this.initData();

    var param = this;
    
    $("#blogdetailModal").on('hidden.bs.modal', function () {
      param.initData();
      param.isCreatingBlog = false;
    });

    $("#blogEditModal").on('hidden.bs.modal', function () {
      param.initData();
      param.isCreatingBlog = false;
    });

    $("#deleteBlogModal").on('hidden.bs.modal', function () {
      param.initData();
      param.isCreatingBlog = false;
    });

  }

  initData(): void {
    this.blogService.getAllBlog()
      .subscribe((data) => {
        this.blogPosts = data;
      });

  }

  createBlog(): void {
    this.isCreatingBlog = true;
    this.blogPost = {
      id: 0,
      title: "",
      body: "",
      user_id: this.loginService.currentUserLoginInfo.userID,
      publish_date: new Date(),
      allow_publish: false,
      created: new Date(),
      updated: new Date()
    }
  }

  deleteBlog(): void {
    this.blogService.deleteBlog(this.blogPost.id)
      .subscribe(() => {
        console.log("Successfuly Deleted!");
      });
  }

  goBackToMainPage(): void {
    this.initData();
    this.isCreatingBlog = false;
  }

  OnGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }


} 
