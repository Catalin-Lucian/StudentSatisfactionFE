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
} from '@nebular/auth';

const routes: Routes = [
  {
    path:'page',
    component:PageComponent,
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        redirectTo:'login',
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
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
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

const socialLinks: NbAuthSocialLink[] = [];

@NgModule({
  imports: [

    RouterModule.forRoot(routes),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',

          baseEndpoint:'',
          login: {
            endpoint: '/api/Authenticate/login',
            method: 'post',
            requireValidToken: false,
            redirect: {
              success: '/page',
              failure: null,
            },
            defaultErrors: ['Login/Email combination is not correct, please try again.'],
            defaultMessages: ['You have been successfully logged in.'],
          },
          register:{
            endpoint:'/api/Authenticate/register',
            method:'post',
          }
        }),
      ],
      forms: {
        login: {
          redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'email',  // strategy id key.
          rememberMe: false,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: true,
            error: true,
          },
          socialLinks: socialLinks, // social links at the bottom of a page
        },
      },
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


