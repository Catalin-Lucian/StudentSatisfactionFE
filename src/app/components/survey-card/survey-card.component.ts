import { Component, Input, OnInit } from '@angular/core';
import { Survey } from 'src/app/_models/survey';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent implements OnInit {

  @Input() survey?:Survey;

  constructor() { }

  ngOnInit(): void {
  }

}
