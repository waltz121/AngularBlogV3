import { Component } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: 'edit-cell',
  template: `<span>
                <button style="height: 20px"  data-toggle="modal" data-target="#blogEditModal" class="btn btn-info" (click)="editBlog()">Edit</button> /
                <button style="height: 20px"  data-toggle="modal" data-target="#deleteBlogModal" class="btn btn-info" (click)="deleteBlog()">Delete</button>
               </span>`,
  styles: [
    `.btn {
  line-height: 0.5    
        }
        `
  ]
})

export class BlogEditRenderer implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  editBlog(): void {
    this.params.context.componentParent.isCreatingBlog = true;

    var selectedData = this.params.data;

    this.params.context.componentParent.blogPost = {
      id: selectedData.id,
      title: selectedData.title,
      body: selectedData.body,
      user_id: selectedData.user_id,
      publish_date: selectedData.publish_date,
      allow_publish: selectedData.allow_publish,
      created: selectedData.created,
      updated: selectedData.updated
    }
  }

  deleteBlog(): void {
    this.params.context.componentParent.isCreatingBlog = true;

    var selectedData = this.params.data;

    this.params.context.componentParent.blogPost = {
      id: selectedData.id,
      title: selectedData.title,
      body: selectedData.body,
      user_id: selectedData.user_id,
      publish_date: selectedData.publish_date,
      allow_publish: selectedData.allow_publish,
      created: selectedData.created,
      updated: selectedData.updated
    }

  }

  refresh(): boolean {
    return false;
  }
}
