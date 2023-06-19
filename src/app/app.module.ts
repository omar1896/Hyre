import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AboutComponent } from './Components/AboutComponent/about/about.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainComponent } from './Components/main/main.component';
import { RoundedButtonComponent } from './Components/rounded-button/rounded-button.component';
import { InfoCardComponent } from './Components/info-card/info-card.component';
import { ToggleButtonComponent } from './Components/toggle-button/toggle-button.component';
import { SignupFormComponent } from './Components/signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './Components/signin/signin.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { SignupOptionComponent } from './Components/signup-option/signup-option.component';
import { SignupPageComponent } from './Components/signup-page/signup-page.component';
import { LogoComponent } from './Components/logo/logo.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MytoastComponent } from './Components/mytoast/mytoast.component';
import { ToastModule } from '@coreui/angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ResponseInterceptor } from './intercreptors/response.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastService } from './Services/toast-service.service';
import { DialogComponent } from './Components/dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {
  DefaultLayoutComponent,
  DefaultHeaderComponent,
  DefaultFooterComponent,
} from './Components/dashboard/containers';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { CreateApplicantsComponent } from './Components/create-applicants/create-applicants.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { InterviewFormComponent } from './Components/interview-form/interview-form.component';
import { DashboardCardComponent } from './Components/dashboard-card/dashboard-card.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { CandidateComponent } from './Components/candidate/candidate.component';
import { FormsModule } from '@angular/forms';
import { DashboardPositionsComponent } from './Components/dashboard-positions/dashboard-positions.component';
import { DashboardHomeComponent } from './Components/dashboard/views/dashboard-home/dashboard-home.component';
import { PositionFormComponent } from './Components/position-form/position-form.component';
import { PositionUpdateComponent } from './Components/position-update/position-update.component';
import { InterviewsComponent } from './Components/interviews/interviews.component';
import { CompanyregisterformComponent } from './Components/companyregisterform/companyregisterform.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthInterceptor } from './intercreptors/auth.interceptor';
import { DashboardApplicantComponent } from './Components/dashboard-applicant/dashboard-applicant.component';
import { AddHrUserComponent } from './Components/dashboard/views/add-hr-user/add-hr-user.component';
import { AuthInterceptor } from './intercreptors/auth.interceptor';
import { ModalComponentComponent } from './Components/modal-component/modal-component.component';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

import {
  SidebarModule,
  NavModule,
  HeaderModule,
  GridModule,
  TableModule,
  UtilitiesModule,
  CardModule,
} from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    NotFoundComponent,
    MainComponent,
    InfoCardComponent,
    RoundedButtonComponent,
    ToggleButtonComponent,
    SignupFormComponent,
    SigninComponent,
    FooterComponent,
    MytoastComponent,
    ForgotPasswordComponent,
    SignupOptionComponent,
    SignupPageComponent,
    LogoComponent,
    DefaultLayoutComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    DashboardCardComponent,
    LayoutComponent,
    DashboardPositionsComponent,
    PositionFormComponent,
    PositionUpdateComponent,
    CandidateComponent,
    DialogComponent,
    InterviewFormComponent,
    DashboardHomeComponent,
    DashboardApplicantComponent,
    CreateApplicantsComponent,
    InterviewsComponent,
    CompanyregisterformComponent,
    AddHrUserComponent,
    ModalComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    SidebarModule,
    NavModule,
    HeaderModule,
    GridModule,
    TableModule,
    UtilitiesModule,
    CardModule,
    IconModule,
    PerfectScrollbarModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    ModalModule,
  ],
  providers: [
    ToastService,
    IconSetService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
