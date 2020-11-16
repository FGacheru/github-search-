import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Repos } from "../app/repos";
import { Users } from "../app/users";


@Injectable({
  providedIn: 'root',
})
export class GithubServiceService {GithubServiceService 

  users: Users;
  repos: Repos;
  repo

  constructor(private http: HttpClient) {
    this.users = new Users("","","","",0,0,0);
    this.repos = new Repos("","","",new Date);

  }
  findUser(term: string) {
   interface ApiResponse{
      name:string,
       login:string,
       avatar_url:string,
       bio:string,
       public_repos:number,
       followers:number,
       following: number,
    }
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'https://api.github.com/users/' + term + '?access_token=' + environment.apiKey;
      this.http.get<ApiResponse>(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.users = res;
            resolve();
          },
          (error) =>{
            reject();
          }
        );
    });
    return promise;
  }
  getUsernameRepo(term:string){
    interface ApiResponse{
      name:string,
      description:string,
      language:string,
      created_at:Date
     
    }
    
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'https://api.github.com/users/' + term + '/repos?access_token=' + environment.apiKey;
      this.http.get<ApiResponse>(apiURL)
        .toPromise()
        .then(
          res => { 
            this.repos = res;
            resolve();
          },
          (error)=>{
            reject();
          }
        );
    });
    return promise;
  
  }
  getRepositories(repo){
    interface ApiResponse{
     
     
      
    }
    
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'https://api.github.com/search/repositories?q=' + repo + '&order=asc?access_token=' + environment.apiKey;
      this.http.get<ApiResponse>(apiURL)
        .toPromise()
        .then(
          res => { 
            this.repo = res;
            resolve();
          },
          (error)=>{
            reject();
          }
        );
    });
    return promise;
  
  }
  //   // const username = 'FGacheru'
  //   return this.http.get(`https://api.github.com/users/${term}?access_token=${environment.apiKey}`
  //   );
  //   // `https://api.github.com/search/repositories?access_token=${environment.apiKey}&q=${term}`
  }

// https://api.github.com/users/$%7Busername%7D?access_token=${environment.apiKey}