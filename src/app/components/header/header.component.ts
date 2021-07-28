import { Component, OnInit } from '@angular/core';
import {NbSearchService  } from '@nebular/theme';

import {AVATAR_ICON_MENU,User} from './link-pages';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  items =AVATAR_ICON_MENU;

  userid:string='';

  constructor(private searchService: NbSearchService,private authService: NbAuthService) { }

  ngOnInit(): void {
    this.authService.onTokenChange()
      .subscribe((token) => {

        if (token.isValid()) {
          var data = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
          this.userid=data.userId;
          console.log(this.userid);
        }
      });

  }
}


