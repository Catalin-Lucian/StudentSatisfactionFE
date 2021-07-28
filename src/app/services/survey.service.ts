import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Survey} from '../_models/survey';
import {HttpClient} from '@angular/common/http';
import { UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyService  {

  constructor(private http:HttpClient,private userService:UserService) { }

  getUnswaredSurveys():Observable<Survey[]>{
    return this.http.get<Survey[]>(`/api/users/${this.userService.getUserId()}/notAnsweredSurveys`);
  }
}
