import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedSurveyCardComponent } from './completed-survey-card.component';

describe('CompletedSurveyCardComponent', () => {
  let component: CompletedSurveyCardComponent;
  let fixture: ComponentFixture<CompletedSurveyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedSurveyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedSurveyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
