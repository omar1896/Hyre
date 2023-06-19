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

const routes: Routes = [
  { path: '', redirectTo:"/home",pathMatch:"full" },
  { path: '',
    component:LayoutComponent,
    children:[
      { path: 'home', component:MainComponent },
     ]
  },
  { path: "dashboard" ,component:DefaultLayoutComponent,children:[
    { path: '', component: DashboardHomeComponent },
    { path: 'my-team', component: DashboardUsersComponent },
    { path :'applicants' , component : DashboardApplicantComponent},
    { path : "positions" , component : DashboardPositionsComponent },
    { path : "positions/create" , component : PositionFormComponent },
    { path : "positions/:id/update" , component : PositionUpdateComponent },
    { path: 'candidates', component: CandidateComponent },

    { path: 'interviews', component: InterviewsComponent },
    { path: 'candidates/:id', component: InterviewFormComponent },
    ],
  },
  { path : 'applicants/create' , component : CreateApplicantsComponent},
  { path : 'about' , component : AboutComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
