import { Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PrivateFeedbackComponent } from './components/private-feedback/private-feedback.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';
import { Error1Component } from './components/error1/error1.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: Error1Component
  },
  {
    path: 'private',
    component: PrivateFeedbackComponent,
    canActivate: [AuthGuard] // Por ejemplo, si quieres proteger esta ruta con un guard
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  // Ruta comodín para redirigir cualquier ruta no especificada a la página de error
  {
    path: '**',
    redirectTo: '/error'
  }
];
