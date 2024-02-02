import { Routes } from '@angular/router';
//Componentes
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PrivateFeedbackComponent } from './components/private-feedback/private-feedback.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'private',
    component: PrivateFeedbackComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];
