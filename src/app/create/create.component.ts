import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrManager} from 'ng6-toastr-notifications'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private _http: HttpService, private route: ActivatedRoute, public router: Router, private toastr: ToastrManager) { }

  public blogTitle: String
  public blogDescription: String
  public blogBodyHtml: String
  public blogCategory: String
  public possibleCategories = ['Comedy', "Drama", 'Technology', "Action"]

  ngOnInit() {
  }

  public createBlog():any {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }

    this._http.createBlog(blogData).subscribe(
      data=>{
        console.log("Blog Created")
        console.log(data)
        this.toastr.successToastr('Blog Created')
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId])
        }, 2000)
      }, 
      error=>{
        console.log("Blog was not created")
        console.log(error.errorMessage)
      }
    )

  } // end create blog

}
