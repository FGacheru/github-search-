import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private http : HttpClient) { }
getRepo(){
const username = 'FGacheru'
return this.http.get(`https://api.github.com/users/FGacheru/repos?access_token=d35c852b854353bd3f700d1a3e39fee82fbf3c57`)

}


}
