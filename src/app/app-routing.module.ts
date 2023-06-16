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
const routes: Routes = [
  { path: '', redirectTo:"/home",pathMatch:"full" },
  { path: '',
    component:LayoutComponent,
    children:[
      { path: 'home', component:MainComponent },
      { path: 'about', component:AboutComponent },
    ]
  },
  { path: "dashboard" ,component:DefaultLayoutComponent,children:[
    // ALL Dashboard endpoints --> example for dashboard/applicants--> { path : "applicants" , component : applicants }
    { path : "positions" , component : DashboardPositionsComponent },
    { path: '', component: DashboardHomeComponent },

  ]},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
