import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit,OnDestroy {
  @Input() nrId:Number=0;
  @Input() submitEvent!:Observable<string>;

  sub!:Subscription;
  questionType:string='';
  questionName:string='';

  constructor(private surveyService:SurveyService) { }

  ngOnInit(): void {
    this.submitEvent.subscribe(id=>{
      this.surveyService.postQuestion({surveyId:id,questionText:this.questionName,type:this.questionType}).subscribe();
      
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  updateSurveyType(event:any){
    this.questionType=event[0];
  }
}
