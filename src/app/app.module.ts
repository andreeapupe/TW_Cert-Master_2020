import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule, RoutingComponents } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoginSignupComponent } from './LOGIN_SIGNUP/login-signup/login-signup.component'
import { RouterModule } from '@angular/router'

import { MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatMenuModule } from '@angular/material/menu'
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSelectModule } from '@angular/material/select'
import { MatDividerModule } from '@angular/material/divider'
import { MatGridListModule } from '@angular/material/grid-list'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import 'hammerjs'

import { MatToolbarModule } from '@angular/material/toolbar'
import { DashboardUserComponent } from './USER_RELATED/dashboard-user/dashboard-user.component'
import { DashboardAdminComponent } from './ADMIN_RELATED/dashboard-admin/dashboard-admin.component'
import { FilterModalComponent } from './ADMIN_RELATED/filter-modal/filter-modal.component'
import { AllCertificationsComponent } from './all-certifications/all-certifications.component'
import { AddRequestComponent } from './USER_RELATED/add-request/add-request.component';
import { ChangeStatusModalComponent } from './ADMIN_RELATED/change-status-modal/change-status-modal.component';
import { DeleteModalComponent } from './USER_RELATED/delete-modal/delete-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    RoutingComponents,
    DashboardUserComponent,
    DashboardAdminComponent,
    FilterModalComponent,
    AllCertificationsComponent,
    AddRequestComponent,
    ChangeStatusModalComponent,
    DeleteModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    RouterModule,
    MatMenuModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    MatSelectModule,
    MatDividerModule,
    MatGridListModule,
    FontAwesomeModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
