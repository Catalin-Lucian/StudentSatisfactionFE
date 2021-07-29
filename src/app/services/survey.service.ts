import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Question, Survey} from '../_models/survey';
import {HttpClient} from '@angular/common/http';
import { UserService} from './user.service';
import {Topic} from '../_models/survey';


@Injectable({
  providedIn: 'root'
})
export class SurveyService  {

  constructor(private http:HttpClient,private userService:UserService) { }

  getUnswaredSurveys():Observable<Survey[]>{
    return this.http.get<Survey[]>(`/api/users/${this.userService.getUserId()}/notAnsweredSurveys`);
  }

  getSurveyTopics(surveyId:string):Observable<Topic[]>{
    return this.http.get<Topic[]>(`/api/survey/${surveyId}/topics`);
  }

  getQuestions(surveyId:string):Observable<Question[]>{
    return this.http.get<Question[]>(`/api/survey/${surveyId}/questions`);
  }

  getSurveyById(surveyId:string):Observable<Survey>{
    return this.http.get<Survey>(`/api/survey/${surveyId}`);
  }
}
