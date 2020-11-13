import { Component } from '@angular/core';
import { GithubServiceService } from './github-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-search';

  gitRepo : any = [];
  constructor(private gitService : GithubServiceService){}

  getGitRepo(){
    this.gitService.getRepo().subscribe(repos => {
    this.gitRepo = repos;
    });
  }
}

