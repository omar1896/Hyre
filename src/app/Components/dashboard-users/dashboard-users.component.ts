import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css'],
})
export class DashboardUsersComponent implements OnInit {
  users: any;

  constructor(private myClient: AuthService,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  deleteUser(event: any) {
    this.openDialog(event)
    // this.myClient.deleteUser(event.target.id).subscribe({
    //   next: (res: any) => {
    //     this.getAllUsers();
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   },
    // });
  }

  openDialog(e: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Delete',
        body: 'Are You Sure to Delete ?',
        cancelButton: 'Cancel',
        nextButton: 'Confirm',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.myClient.deleteUser(e.target.id).subscribe({
          next: (res: any) => {
            this.getAllUsers();
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
    });
  }

  getAllUsers = () => {
    this.myClient.getAllUsers().subscribe({
      next: (data: any) => {
        if (data.success) {
          this.users = data['data'];
        } else {
          console.log(data.message);
        }
      },
    });
  };
}
