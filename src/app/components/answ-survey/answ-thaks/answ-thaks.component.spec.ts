import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswThaksComponent } from './answ-thaks.component';

describe('AnswThaksComponent', () => {
  let component: AnswThaksComponent;
  let fixture: ComponentFixture<AnswThaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswThaksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswThaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
