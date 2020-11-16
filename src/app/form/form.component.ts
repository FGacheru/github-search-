import { Component, OnInit,Output,EventEmitter } from '@angular/core'
import { GithubServiceService } from "../github-service.service";
// import { Repos } from "../repos";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  searchName: string;

  @Output() searchTerms= new EventEmitter<any>();
  
    constructor(private gitService : GithubServiceService) { 
      this.searchName = this.searchName
    }
    getName(){
      this.searchTerms.emit(this.searchName);
      this.searchName = "";
    }

  ngOnInit(): void {
  }

}
