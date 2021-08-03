import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
  NbPasswordAuthStrategy,
  NbAuthModule,
  NbAuthJWTToken,
} from '@nebular/auth';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { AnswSurveyComponent } from './components/answ-survey/answ-survey.component';
import { AnswThaksComponent } from './components/answ-survey/answ-thaks/answ-thaks.component';
import { CompletedSurveysComponent } from './components/completed-surveys/completed-surveys.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Role } from './_models/role';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/page/home',
    pathMatch:'full'
  },
  {
    path:'page',
    canActivate:[AuthGuard],
    component:PageComponent,

    children:[
      {
        path:'',
        redirectTo:'/page/home',
        pathMatch:'full',
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'survey/:id',
        component:AnswSurveyComponent,

      },
      {
        path:'thanks',
        component:AnswThaksComponent
      },
      {
        path:'answer-surveys',
        component:CompletedSurveysComponent
      },
      {
        path:'create-survey',
        component:CreateSurveyComponent,
        canActivate: [AuthGuard],
        data: { role: Role.Admin }
      },
      {
        path:'profile',
        component:ProfileComponent
      }

    ]
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        redirectTo:'/auth/login',
        pathMatch:'full'
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      // {
      //   path: 'reset-password',
      //   component: NbResetPasswordComponent,
      // },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

//icoms to be shown at the bottom of page
export interface NbAuthSocialLink {
  link?: string,
  url?: string,
  target?: string,
  title?: string,
  icon?: string,
}

interface AuthResponse{
  id:string,
  token:string,
  expiration:string
}

const socialLinks: NbAuthSocialLink[] = [];

@NgModule({
  imports: [

    RouterModule.forRoot(routes),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
            key:'token',

          },
          baseEndpoint:'',
          login: {
            endpoint: '/api/Authenticate/login',
            method: 'post',
            requireValidToken: false,
            redirect: {
              success: '/page/home',
              failure: null,
            },
            defaultErrors: ['Login/Email combination is not correct, please try again.'],
            defaultMessages: ['You have been successfully logged in.'],

          },
          register:{
            endpoint:'/api/Authenticate/register',
            method:'post',
            requireValidToken: false,
            redirect: {
              success: '/auth/login',
              failure: null,
            },
          },
          logout:{
            endpoint:'',
            method:'null',
            alwaysFail:false,
            redirect: {
              success: '/auth',
              failure: '/',
            },
          },
          validation:{
            password: {
              required: true,
              minLength:5,
              maxLength:50,
              regexp: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,50}$",
            }
          }
        }),
      ],
      forms: {
        login: {
          // redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'email',  // strategy id key.
          rememberMe: false,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: true,
            error: true,
          },
          socialLinks: socialLinks, // social links at the bottom of a page
        },
        register:{
          strategy:'email',

        },
      },
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


