import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponentComponent } from '../modal-component/modal-component.component'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PositionServiceService } from 'src/app/Services/position-service.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-positions',
  templateUrl: './dashboard-positions.component.html',
  styleUrls: ['./dashboard-positions.component.css']
})
export class DashboardPositionsComponent implements OnInit {
  id = 0;
  positions: any;
  bsModalRef?: BsModalRef;
  constructor(public myService: PositionServiceService, public router: Router , private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.getAllPositions()
  }



  deletePos(e: any){
    this.openDialog(e)
  }
  openDialog(e: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Delete',
        body: 'Are You Sure to Delete ?',
        cancelButton: 'Cancel',
        nextButton: 'Confirm'

      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
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

    });
  };

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

