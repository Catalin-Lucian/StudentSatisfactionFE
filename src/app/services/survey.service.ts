import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Comment, Question, Rating, SumitedQuestion, Survey} from '../_models/survey';
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

  postRating(rating:Rating,questionId:string):Observable<void>{
    rating.userId=this.userService.getUserId();
    return this.http.post<void>(`/api/ratings/${questionId}/${this.userService.getUserId()}`, rating);

  }

  postSumitedQuestion(submitedQuestion:SumitedQuestion,surveyId:string):Observable<void>{
    submitedQuestion.userId=this.userService.getUserId();
    return this.http.post<void>(`/api/submittedQuestions/user/${this.userService.getUserId()}/survey/${surveyId}`,submitedQuestion);
  }

  postComment(comment:Comment,surveyId:string):Observable<void>{
    comment.userId=this.userService.getUserId();
    return this.http.post<void>(`/api/comments/${this.userService.getUserId()}/${surveyId}}`, comment);
  }

  getRaingForUser(questionId:string):Observable<Rating>{

    return this.http.get<Rating>(`/api/ratings/question/${questionId}/users/${this.userService.getUserId()}`);
  }

  getAnswaredSurveys():Observable<Survey[]>{
    return this.http.get<Survey[]>(`/api/users/${this.userService.getUserId()}/answeredSurveys`);
  }

  putRating(rating:Rating,ratingId:any):Observable<void>{
    rating.userId=this.userService.getUserId();
    return this.http.put<void>(`/api/ratings/${rating.questionId}/${ratingId}`,rating);
  }
}
