import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {

  constructor(private route: Router){

  }

  createPosition(){
    this.route.navigateByUrl('dashboard/candidates')
  }
  createUser(){
    this.route.navigateByUrl('dashboard/user/create')
  }
  updateSubscription(){
    this.route.navigateByUrl('dashboard/candidates')
  }

}
