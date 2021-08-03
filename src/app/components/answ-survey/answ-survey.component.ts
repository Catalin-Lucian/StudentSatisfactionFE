import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SurveyService } from 'src/app/services/survey.service';
import { UserService } from 'src/app/services/user.service';
import { Survey } from 'src/app/_models/survey';

@Component({
  selector: 'app-answ-survey',
  templateUrl: './answ-survey.component.html',
  styleUrls: ['./answ-survey.component.scss']
})
export class AnswSurveyComponent implements OnInit,OnDestroy  {
  id!: string;
  survey: Survey|any;
  private sub: any;
  submitEventSubject:Subject<void>=new Subject<void>();

  submitedQuestion!:string;
  comment!:string;
  anwseredSurvey:Boolean=false;
  surveyExpired:Boolean=false;

  constructor(
    private route: ActivatedRoute,
    private surveyService:SurveyService,
    private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
    //get survey and questions
    this.sub = this.route.params.subscribe(params => {
      var surveyId = params['id'];

      //get if user answered the survey
      this.userService.getUserForSurvey(surveyId).subscribe(user=>{
        if (user==null){
          this.anwseredSurvey=false;
        }
        else{
          this.anwseredSurvey=true;
        }
      })

      this.id=surveyId;
      this.surveyService.getSurveyById(surveyId).subscribe(survey=>{
        this.survey=survey;
        if (new Date(survey.endDate)<new Date()){
          this.surveyExpired=true;
        }
        this.surveyService.getQuestions(surveyId).subscribe(questions=>{
          this.survey.questions=questions;
        })
      }
      );
   });


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit(){
    this.submitEventSubject.next();

    if(this.submitedQuestion){
      this.surveyService.postSumitedQuestion(
        {
          surveyId:this.survey.id,
          questionText:this.submitedQuestion
        },this.survey.id).subscribe();
    };
    if(this.comment){
      this.surveyService.postComment({
        surveyId:this.survey.id,
        commentText:this.comment
      },this.survey.id).subscribe()
    }

    if (this.anwseredSurvey==false){
      this.userService.postUserServey(this.survey.id).subscribe();
    }

    this.router.navigate(["/page/thanks"])
  }



}
