import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
import { Repos } from "../repos";
import { Users } from "../users";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  users: Users;
  repos: Repos;
  Users = environment.apiKey
 
  
  constructor(private gitService : GithubServiceService){ }
  findUser(term: string){
    this.gitService.findUser(term).then(
      ( success)=>{
        this.users = this.gitService.users;
      },
      (error)=>{
        
      }
     )
     this.gitService.getUsernameRepo(term).then(
       ( success)=>{
         this.repos = this.gitService.repos;
       
         
         
         
       },
       (error)=>{
         console.log(error)
       }
      )
   }
ngOnInit():void{
  this.findUser('FGacheru') 

};

}