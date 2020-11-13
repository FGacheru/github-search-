import { Component } from '@angular/core';
import { GithubServiceService } from './github-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-search';

  constructor(private gitService : GithubServiceService){}
}

