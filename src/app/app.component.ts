import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from './github-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'github-search';

  Repos : any = [];
  constructor(private gitService : GithubServiceService){
    
  }
ngOnInit():void{
//   this.getGitRepo
  // }
  //  getGitRepo(){
    this.gitService.getRepo().subscribe(repos => {
    this.Repos = repos;
    console.log(JSON.stringify(repos))
    });
  }

};

