import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { Survey } from 'src/app/_models/survey';

@Component({
  selector: 'app-completed-surveys',
  templateUrl: './completed-surveys.component.html',
  styleUrls: ['./completed-surveys.component.scss']
})
export class CompletedSurveysComponent implements OnInit {

  _surveys!:Survey[];
  constructor(private surveyService:SurveyService) { }

  ngOnInit(): void {
    this.surveyService.getAnswaredSurveys().subscribe(surveys=>{
      this._surveys=surveys;
    })
  }

}
