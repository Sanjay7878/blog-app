import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service';
import { error } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public allBlogs

  constructor(public httpService: HttpService) { }

  ngOnInit() {

    this.allBlogs = this.httpService.getAllBlogs().subscribe(
      data=>{
        console.log(data)
        this.allBlogs = data['data']
      },
      error=>{
        console.log("some error occured")
        console.log(error)
      }
    )
    console.log(this.allBlogs)
  }

  ngOnDestroy(){
  }

}
