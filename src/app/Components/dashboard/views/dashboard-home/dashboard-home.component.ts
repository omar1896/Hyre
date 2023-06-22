import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../dialog/dialog.component'
import { MatDialog } from '@angular/material/dialog';
import { CompanyService } from 'src/app/Services/company.service';


@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  user:any;
  isModalClosed?: boolean
  constructor(private route: Router , private dialog: MatDialog,private companyService:CompanyService){
    this.isModalClosed = true
  }
  ngOnInit(): void {
    this.companyService.getCompanyInfo().subscribe({
      next:(res:any)=>{
        this.user=res.data
        // console.log(this.user.subscription=="Bootstrap")
        if(this.user.subscription=="Bootstrap"){
          // this.isModalClosed = !this.isModalClosed
          this.openDialog()
        }
      },
      error:(err:any)=>{
        
      }
    })
    // if(!this.isModalClosed){
    //   this.openDialog()
    // }
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
