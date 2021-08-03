import { Component, OnDestroy, OnInit } from '@angular/core';
import {NbSearchService  } from '@nebular/theme';

import {AVATAR_ICON_MENU} from './link-pages';
import {UserService} from '../../services/user.service'
import {User} from '../../_models/user'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit,OnDestroy {

  items =AVATAR_ICON_MENU;
  user:User | undefined;
  private sub!:Subscription;

  constructor(private searchService: NbSearchService,private userService:UserService) { }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub= this.userService.getUserData().subscribe((user)=>{
      this.user=user;
    })
  }
}


