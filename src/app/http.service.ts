import { Injectable } from '@angular/core';

import {Observable} from 'rxjs'

import {HttpClient, HttpErrorResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  public allBlogs
  public currentBlog
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs'
  private authToken = 'ODI5ZjczY2Y1MTc2ZWEyNmQxMmJmZWU1NDIzZTdkZWU1ODU1YjdiMmMzNWU5N2ZmOWIwMzZmOGE1OTM2ZjY4YTQwOWZjYTlhOThhN2MwZjQ3NTBkN2E4MmYwY2U3Mzk4Y2FkNDAxMzA0NjU5Yzg2NzNhNWIzYmUwY2I0M2YxNDdiYQ=='

  private handleError(err: HttpErrorResponse){
    console.log("Http error handler called")
    console.log(err.message)
    return Observable.throw(err.message)
  } // end exception handle error

  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authToken)
    return myResponse

  } // end get all blogs

  public getSingleBlog(blogId): any {
    let myResponse = this._http.get(this.baseUrl+'/view/'+blogId+'?authToken='+this.authToken)
    return myResponse
  } // end get single blog

  public createBlog(blogData): any {
    let myResponse = this._http.post(this.baseUrl+'/create?authToken='+this.authToken, blogData)
    return myResponse
  } // end create blog

  public deleteBlog(blogId): any {
    let data = {}
    let myResponse = this._http.post(this.baseUrl+'/'+blogId+'/delete?authToken='+this.authToken, data)
    return myResponse
  } // end delete blog

  public editBlog(blogId, blogData): any {
    let myResponse = this._http.put(this.baseUrl+'/'+blogId+'/edit?authToken='+this.authToken, blogData)
    return myResponse
  } // end edit blog
}
