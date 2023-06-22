import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupPageComponent } from './Components/signup-page/signup-page.component';
import { MainComponent } from './Components/main/main.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { AboutComponent } from './Components/AboutComponent/about/about.component';
import { DefaultLayoutComponent } from './Components/dashboard/containers/default-layout/default-layout.component';
import {  DashboardPositionsComponent} from './Components/dashboard-positions/dashboard-positions.component';
import { DashboardHomeComponent } from './Components/dashboard/views/dashboard-home/dashboard-home.component';
import { PositionFormComponent } from './Components/position-form/position-form.component';
import { PositionUpdateComponent } from './Components/position-update/position-update.component';
import { CandidateComponent } from './Components/candidate/candidate.component';
import { InterviewFormComponent } from './Components/interview-form/interview-form.component';
import { CreateApplicantsComponent } from './Components/create-applicants/create-applicants.component';
import { InterviewsComponent } from './Components/interviews/interviews.component';
import { DashboardApplicantComponent } from './Components/dashboard-applicant/dashboard-applicant.component';
import { DashboardUsersComponent } from './Components/dashboard-users/dashboard-users.component';
import { ChangeSubscriptionComponent } from './Components/change-subscription/change-subscription.component';
import { SuccessPaymentComponent } from './Components/success-payment/success-payment.component';
import { AddHrUserComponent } from './Components/dashboard/views/add-hr-user/add-hr-user.component';
import { AuthGuard } from './Guards/auth.guard';
import { LoggedinGuard } from './Guards/loggedin.guard';
import { ProfileComponent } from './Components/profile/profile.component';
import { ThankyouComponent } from './Components/thankyou/thankyou.component';
import { PaymentFailComponent } from './Components/payment-fail/payment-fail.component';
import { RedirectpaymentComponent } from './Components/redirectpayment/redirectpayment.component';
import { PaymentSuccessComponent } from './Components/payment-success/payment-success.component';



const routes: Routes = [
  { path: '', redirectTo:"/home",pathMatch:"full" },
  { path: '',
    component:LayoutComponent,
    children:[
      { path: 'home', component:MainComponent },
    ]
  },
  { path: "dashboard" ,canActivate:[AuthGuard],component:DefaultLayoutComponent,children:[
    { path: '', component: DashboardHomeComponent },
    { path: 'my-team', component: DashboardUsersComponent },
    { path :'applicants' , component : DashboardApplicantComponent},
    { path : "positions" , component : DashboardPositionsComponent },
    { path : "positions/create" , component : PositionFormComponent },
    { path : "positions/:id/update" , component : PositionUpdateComponent },
    { path: 'candidates', component: CandidateComponent },
    { path: 'interviews', component: InterviewsComponent },
    { path: 'candidates/:id', component: InterviewFormComponent },
    { path: 'subscriptions', component: ChangeSubscriptionComponent },
    { path: 'user/create', component: AddHrUserComponent },
    { path: 'profile', component: ProfileComponent },

    ],
  },
  { path : 'applicants/create/:token' , component : CreateApplicantsComponent},
  { path : 'applicants/confirmation' , component : ThankyouComponent},
  { path : 'about' , component : AboutComponent},
  { path: 'signin', component: SigninComponent ,canActivate:[LoggedinGuard]},
  { path: 'signup', component: SignupPageComponent ,canActivate:[LoggedinGuard]},
  // { path: 'payment/successful', component: SuccessPaymentComponent },
  { path: 'payment/successful', component: PaymentSuccessComponent },
  { path: 'payment/failed', component: PaymentFailComponent },
  { path: 'checkout/:cId/:prId', component: RedirectpaymentComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
