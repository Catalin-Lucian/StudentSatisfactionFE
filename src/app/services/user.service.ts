import { Injectable, OnInit } from '@angular/core';
import { NbAuthService} from '@nebular/auth'
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../_models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  private _userId:string='';

  constructor(private authService: NbAuthService,private http:HttpClient) {
    this.authService.onTokenChange()
      .subscribe((token) => {

        if (token.isValid()) {
          var data = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
          this._userId=data.userId;
        }

      });
  }
  ngOnInit(): void {
  }

  getUserData():Observable<User>{
    return this.http.get<User>(`/api/users/${this._userId}`)
  }

}
