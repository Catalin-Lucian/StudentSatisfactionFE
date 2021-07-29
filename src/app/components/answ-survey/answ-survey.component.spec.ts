import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswSurveyComponent } from './answ-survey.component';

describe('AnswSurveyComponent', () => {
  let component: AnswSurveyComponent;
  let fixture: ComponentFixture<AnswSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
