import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms'
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubServiceService } from './github-service.service';
import { FormComponent } from './form/form.component';
import { from } from 'rxjs';
import { DateCountPipe } from './date-count.pipe';
//import { GithubProfileComponent } from './github-profile/github-profile.component';
//import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
  AppComponent,
  SearchComponent,
  FormComponent,
  DateCountPipe
//  GithubProfileComponent,
  //NotFoundComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
