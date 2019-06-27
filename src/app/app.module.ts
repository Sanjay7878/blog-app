import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { HttpService } from './http.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ng6-toastr-notifications'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { AboutComponent } from './about/about.component'
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    EditComponent,
    CreateComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'', redirectTo:'home', pathMatch: 'full'},
      {path:'blog/:blogId', component:ViewComponent},
      {path:'create', component:CreateComponent},
      {path:'edit/:blogId', component:EditComponent},
      {path:'about', component:AboutComponent}
    ]),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
