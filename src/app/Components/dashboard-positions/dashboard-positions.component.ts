import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { PositionServiceService } from 'src/app/Services/position-service.service';

@Component({
  selector: 'app-dashboard-positions',
  templateUrl: './dashboard-positions.component.html',
  styleUrls: ['./dashboard-positions.component.css']
})
export class DashboardPositionsComponent implements OnInit {
  positions:any;
  constructor(public myService: PositionServiceService,public router:Router){

  }
  ngOnInit(): void {
    this.myService.GetAllPositions().subscribe(
      {
        next:(data)=>{
          console.log("the data",data);
          this.positions = data;
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

  showAlert(e:any)
  {
    let id=e.target.id
   let check= confirm("are you sure that you want to delete this student?");
   if(check)
   {
    this.myService.DeletePosition(id).subscribe();
    //& to reload the component to see changes
      this.router.navigate(['/dashboard/positions']);

   }
  }
}
