import { Component, OnInit } from '@angular/core';
import {Survey} from '../../_models/survey';
import {SurveyService,} from '../../services/survey.service';
import { NbSearchService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  _surveys:Survey[] =[];
  _initialSurveys:Survey[]=[];

  constructor(private surveyService:SurveyService,private searchService: NbSearchService) { }

  ngOnInit(): void {
    this.surveyService.getUnswaredSurveys()
    .subscribe( (surveys)=> {
        this._initialSurveys=surveys;
        this._surveys=surveys;
      }
    );

    this.searchService.onSearchSubmit()
    .subscribe((data: any) => {
      console.log(data.term);
      this._surveys=this._initialSurveys.filter((survey:Survey)=>{
        survey.name.toLowerCase().includes(data.term.toLowerCase())
      });
    })
  }
}
