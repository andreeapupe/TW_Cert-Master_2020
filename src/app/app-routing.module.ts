import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginSignupComponent } from './LOGIN_SIGNUP/login-signup/login-signup.component'
import { DashboardUserComponent } from './USER_RELATED/dashboard-user/dashboard-user.component'
import { DashboardAdminComponent } from './ADMIN_RELATED/dashboard-admin/dashboard-admin.component'
import { AllCertificationsComponent } from '../app/all-certifications/all-certifications.component'

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
  { path: 'dashboard-user', component: DashboardUserComponent },
  { path: 'welcome-screen', component: LoginSignupComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent },
  { path: 'all-certifications', component: AllCertificationsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const RoutingComponents = [
  LoginSignupComponent,
  DashboardUserComponent,
  AllCertificationsComponent,
]
