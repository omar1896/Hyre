import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../dialog/dialog.component'
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  isModalClosed: boolean
  constructor(private route: Router , private dialog: MatDialog){
    this.isModalClosed = false
  }
  ngOnInit(): void {
    if(!this.isModalClosed){
      this.openDialog()
    }
  }

  createPosition(){

    this.route.navigateByUrl('dashboard/positions/create')

  }
  createUser(){
    this.route.navigateByUrl('dashboard/user/create')
  }
  updateSubscription(){
    this.route.navigateByUrl('dashboard/subscriptions')
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogComponent,{data:{
      title:"Your Subscription",
      body:"Hi Sir!<br>You are now on free trial.<br>Go to change your subscription and take a lot of privileges!",
      cancelButton:"Cancel",
      nextButton:"Next"
    }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       this.route.navigateByUrl('/dashboard/subscriptions')
      }else{
        this.isModalClosed = true
      }
    });
  }



}
