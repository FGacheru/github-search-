import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private http : HttpClient) { }
getRepo(){
const username = 'FGacheru'
return this.http.get(`https://api.github.com/users/$(username)/repos`)

}


}
