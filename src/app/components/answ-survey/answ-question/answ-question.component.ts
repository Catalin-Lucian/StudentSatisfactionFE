import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SurveyService } from 'src/app/services/survey.service';
import { UserService } from 'src/app/services/user.service';
import { Question,Rating } from 'src/app/_models/survey';

@Component({
  selector: 'app-answ-question',
  templateUrl: './answ-question.component.html',
  styleUrls: ['./answ-question.component.scss']
})
export class AnswQuestionComponent implements OnInit,OnDestroy {
  @Input() question: any;
  @Input() submitEvent!:Observable<void>;

  private eventSubscription!:Subscription;

  answText:string="";
  answStars:Number=0;
  anseredQuestion:Boolean=false;
  rating!:Rating;

  constructor(private userService:UserService,private surveyService:SurveyService) { }

  ngOnInit(): void {
    this.surveyService.getRaingForUser(this.question.id).subscribe(
      rating=>{
        this.rating=rating;
        if (this.rating==null)
          this.anseredQuestion=false;
        else{
          this.anseredQuestion=true;
          this.answStars=rating.points;
        }

      },
      (error)=>{
        console.log(error)
      }
    )

    this.eventSubscription=this.submitEvent.subscribe(
      ()=>{
        if(this.anseredQuestion){
          if ((this.answText!="" && this.answText!=this.rating?.answear) || (this.answStars!=0 && this.answStars!=this.rating?.points)){
            this.surveyService.putRating({
              questionId:this.question.id,
              points:this.answStars,
              answear:this.answText
            },this.rating.id).subscribe();
          }
        }else{
          if (this.answText!="" || this.answStars!=0 ){
            this.surveyService.postRating({
              questionId:this.question.id,
              points:this.answStars,
              answear:this.answText
            },this.question.id).subscribe();
          }
        }
        if ((this.answText!="" && this.answText!=this.rating?.answear) || (this.answStars!=0 && this.answStars!=this.rating?.points)){
          this.surveyService.postRating({
            questionId:this.question.id,
            points:this.answStars,
            answear:this.answText
          },this.question.id).subscribe();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  onValueChange(event: Number){
    this.answStars=event;
  }

}
