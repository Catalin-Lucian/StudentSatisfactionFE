import { Component, OnInit } from '@angular/core';
import {Survey} from '../../_models/survey';
import {SurveyService,} from '../../services/survey.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  _surveys:Survey[] =[];

  constructor(private surveyService:SurveyService) { }

  ngOnInit(): void {
    this.surveyService.getUnswaredSurveys()
    .subscribe( (surveys)=> {
        this._surveys=surveys;
      }
    );
  }
}
