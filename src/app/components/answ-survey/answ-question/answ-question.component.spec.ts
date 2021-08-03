import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswQuestionComponent } from './answ-question.component';

describe('AnswQuestionComponent', () => {
  let component: AnswQuestionComponent;
  let fixture: ComponentFixture<AnswQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
