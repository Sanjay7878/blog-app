import { Component, OnInit, OnDestroy } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router'
import { HttpService } from '../http.service';
import { ToastrManager } from 'ng6-toastr-notifications';

import {Location} from '@angular/common'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers:[Location]
})
export class ViewComponent implements OnInit, OnDestroy {
  
  public currentBlog
  public allBlogs

  constructor(private _route: ActivatedRoute, private router: Router, private _http: HttpService, private toastr: ToastrManager, private location: Location) { }

  ngOnInit() {

    let myBlogId = this._route.snapshot.paramMap.get('blogId')
    console.log(myBlogId)

    this._http.getSingleBlog(myBlogId).subscribe(
      data=>{
        console.log(data)
        this.currentBlog = data["data"]
      }, error=>{
        console.log("Unable to retrieve data")
        console.log(error)
      }
    )
  }

  public deleteBlog(): any {
    this._http.deleteBlog(this.currentBlog.blogId).subscribe(
      data=>{
        console.log(data)
        this.toastr.successToastr('Blog Deleted Succesfully')
        setTimeout(()=>{
          this.router.navigate(['/'])
        }, 1500)
      },
      error=>{
        console.log(error)
        this.toastr.errorToastr("Blog not was deleted")
      }
    )
  } // end delete blog

  public goToPreviousPage(): any{
    this.location.back()
  } // end go to previous page

  ngOnDestroy(){
  }
}
