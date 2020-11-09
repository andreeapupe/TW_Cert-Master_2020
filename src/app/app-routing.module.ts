import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSignupComponent } from './LOGIN_SIGNUP/login-signup/login-signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome-screen',
    pathMatch: 'full',
  },
  {
    path: 'welcome-screen',
    component: LoginSignupComponent,
  },

  { path: '**', component: LoginSignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
