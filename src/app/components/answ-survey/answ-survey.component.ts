import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';
import { Survey } from 'src/app/_models/survey';

@Component({
  selector: 'app-answ-survey',
  templateUrl: './answ-survey.component.html',
  styleUrls: ['./answ-survey.component.scss']
})
export class AnswSurveyComponent implements OnInit,OnDestroy  {
  id!: string;
  survey!: Survey;
  private sub: any;
  constructor(private route: ActivatedRoute,private surveyService:SurveyService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      var surveyId = params['id'];
      this.id=surveyId;
      this.surveyService.getSurveyById(surveyId).subscribe(survey=>{
        this.survey=survey;
        this.surveyService.getQuestions(surveyId).subscribe(questions=>{
          this.survey.questions=questions;
          console.log(this.survey);
        })
      }
      );
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
