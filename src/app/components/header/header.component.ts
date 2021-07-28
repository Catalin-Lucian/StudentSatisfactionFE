import { Component, OnInit } from '@angular/core';
import {NbSearchService  } from '@nebular/theme';

import {AVATAR_ICON_MENU} from './link-pages';
import {UserService} from '../../services/user.service'
import {User} from '../../_models/user'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  items =AVATAR_ICON_MENU;
  user:User | undefined;

  constructor(private searchService: NbSearchService,private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe((user)=>{
      this.user=user;
    })
  }
}


