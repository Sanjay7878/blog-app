import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router} from '@angular/router'
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  public currentBlog
  public possibleCategories = ['Comedy', "Drama", 'Technology', "Action"]


  constructor(private _http: HttpService, private route: ActivatedRoute, private toastr: ToastrManager, public router: Router) { }

  ngOnInit() {
    let myBlogId = this.route.snapshot.paramMap.get('blogId')
    this._http.getSingleBlog(myBlogId).subscribe(
      data=>{
        console.log(data)
        this.currentBlog = data['data']
        console.log("current blog is")
        console.log(this.currentBlog)
      },
      error=>{
        console.log("Unable to view blog")
        console.log(error.errorMessage)
      }
    )
  }
  
  public editBlog(): any {
    this._http.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data=>{
        console.log(data)
        this.toastr.successToastr('Blog Edited Succesfully')
        setTimeout(() => {
          this.router.navigate(['/blog',this.currentBlog.blogId])
        }, 1500);
      },
      error=>{
        console.log("Unable to edit blog")
        console.log(error.errorMessage)
        this.toastr.errorToastr(`Unable to edit Blog because: ${error.errorMessage}`)
      }
    )
  } // end edit blog

  ngOnDestroy() {
  }
}
