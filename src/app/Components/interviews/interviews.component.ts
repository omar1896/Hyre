import { InterviewService } from 'src/app/Services/interview.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Environment } from 'src/Environment/env';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css'],
})
export class InterviewsComponent {
  interviews: any;
  meetingUrl: string
  constructor(
    private InterviewService: InterviewService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.meetingUrl = Environment.meetUrl
  }

  ngOnInit(): void {
    this.interviews = this.InterviewService.getInterviews().subscribe({
      next: (response: any) => {
        console.log(response.data);

        this.interviews = response.data;
      },
    });
  }

  deleteInterview(id: any) {
    this.openDialog(id)
  }

  openDialog(id: any) {
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
        this.InterviewService.deleteInterview(id).subscribe({
          next: (response: any) => {
            this.interviews = response.data;
          },
        });
      }

    });
  };
}
