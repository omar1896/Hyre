import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponentComponent } from '../modal-component/modal-component.component'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PositionServiceService } from 'src/app/Services/position-service.service';

@Component({
  selector: 'app-dashboard-positions',
  templateUrl: './dashboard-positions.component.html',
  styleUrls: ['./dashboard-positions.component.css']
})
export class DashboardPositionsComponent implements OnInit {
  id = 0;
  positions: any;
  // showModal = true;
  // confirmationMessage = 'Are you sure you want to delete this item?';
  bsModalRef?: BsModalRef;
  constructor(public myService: PositionServiceService, public router: Router) {

  }
  ngOnInit(): void {
    this.getAllPositions()
  }






  // onDeleteConfirmed(): void {
  //   // Perform the delete action
  //   // this.showModal = false;
  //   this.myService.DeletePosition(this.id).subscribe();
  // }

  // onModalCanceled(): void {
  //   this.showModal = false;
  // }

  // showAlert(e:any)
  // {
  //   this.showModal = true;
  //   this.id=e.target.id

  // }


  showAlert(e: any) {
    this.myService.DeletePosition(e.target.id).subscribe({
      next: (res: any) => {
        this.getAllPositions()
        this.router.navigateByUrl("/dashboard/positions")
      },
      error: (err: any) => {
        console.log(err)
      }
    })

  }

  getAllPositions() {
    this.myService.GetAllPositions().subscribe(
      {
        next: (data:any) => {
          console.log("the data", data);
          this.positions = data
        },
        error: (err) => { console.log(err) }
      }
    );
  }
}

// getAllUsers=()=>{
//   this.myClient.getAllUsers().subscribe({
//    next: (data: any) => {
//      if (data.success) {
//        this.users = data["data"];
//        console.log(this.users)
//      }
//      else {
//        console.log(data.message);
//      }
//    }
//  });
// }
// }



// showAlert(e:any)
// {

//   let id=e.target.id
//  let check= confirm("are you sure that you want to delete this student?");
//  if(check)
//  {
//   this.myService.DeletePosition(id).subscribe();
//   //& to reload the component to see changes
//     this.router.navigate(['/dashboard/positions']);

//  }
// }
