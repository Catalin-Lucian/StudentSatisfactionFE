import { Injectable, OnInit } from '@angular/core';
import {NbTokenLocalStorage,NbAuthService,NbAuthJWTToken} from '@nebular/auth'

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  user={};

  constructor(private tokenStorage:NbTokenLocalStorage,private authService: NbAuthService) {
  }
  ngOnInit(): void {
    // this.authService.onTokenChange()
    //   .subscribe((token) => {

    //     if (token.isValid()) {
    //       this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
    //       console.log(this.user);
    //     }

    //   });
  }

}
