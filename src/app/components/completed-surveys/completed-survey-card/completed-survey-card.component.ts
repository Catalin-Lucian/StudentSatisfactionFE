import { Component, Input, OnInit } from '@angular/core';
import { Survey } from 'src/app/_models/survey';

@Component({
  selector: 'app-completed-survey-card',
  templateUrl: './completed-survey-card.component.html',
  styleUrls: ['./completed-survey-card.component.scss']
})
export class CompletedSurveyCardComponent implements OnInit {

  @Input() survey?:Survey;

  constructor() { }

  ngOnInit(): void {
  }

}
