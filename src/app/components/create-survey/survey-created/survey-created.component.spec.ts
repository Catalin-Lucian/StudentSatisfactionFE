import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCreatedComponent } from './survey-created.component';

describe('SurveyCreatedComponent', () => {
  let component: SurveyCreatedComponent;
  let fixture: ComponentFixture<SurveyCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
