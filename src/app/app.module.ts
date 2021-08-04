import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor'
import { ErrorInterceptor } from './_helpers/error.interceptor'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';

import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbToastrModule,
  NbWindowModule,
  NbCardModule,
  NbSearchModule,
  NbContextMenuModule,
  NbUserModule,
  NbActionsModule,
  NbIconModule,
  NbTagModule,
  NbStepperModule,
  NbInputModule,
  NbButtonGroupModule,
  NbRadioModule,
  NbPopoverModule,
  NbCalendarModule,
  NbFormFieldModule,
  NbAutocompleteModule,
  NbAlertModule,


}
from '@nebular/theme';



import { PageComponent } from './components/page/page.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { SurveyCardComponent } from './components/survey-card/survey-card.component';
import { AnswSurveyComponent } from './components/answ-survey/answ-survey.component';
import { AnswQuestionComponent } from './components/answ-survey/answ-question/answ-question.component';
import { AnswThaksComponent } from './components/answ-survey/answ-thaks/answ-thaks.component';
import { CompletedSurveysComponent } from './components/completed-surveys/completed-surveys.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CompletedSurveyCardComponent } from './components/completed-surveys/completed-survey-card/completed-survey-card.component';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { CreateQuestionComponent } from './components/create-survey/create-question/create-question.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
    SurveyCardComponent,
    AnswSurveyComponent,
    AnswQuestionComponent,
    AnswThaksComponent,
    CompletedSurveysComponent,
    ProfileComponent,
    CompletedSurveyCardComponent,
    CreateSurveyComponent,
    CreateQuestionComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbSearchModule,
    NbContextMenuModule,
    NbUserModule,
    NbActionsModule,
    NbIconModule,
    NbTagModule,
    NbStepperModule,
    NbInputModule,
    ReactiveFormsModule,
    NbButtonGroupModule,
    NbRadioModule,
    NbPopoverModule,
    NbCalendarModule,
    NbFormFieldModule,
    NbAutocompleteModule,
    NbAlertModule,


    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbSecurityModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
