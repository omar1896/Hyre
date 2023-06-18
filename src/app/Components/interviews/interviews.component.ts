import { InterviewService } from 'src/app/Services/interview.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css'],
})
export class InterviewsComponent {
  interviews: any;
  constructor(
    private InterviewService: InterviewService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.interviews = this.InterviewService.getInterviews().subscribe({
      next: (response: any) => {
        console.log(response.data);

        this.interviews = response.data;
      },
    });
  }

  deleteInterview(id: any) {
    console.log(id);
    this.InterviewService.deleteInterview(id).subscribe({
      next: (response: any) => {
        this.interviews = response.data;
      },
    });
  }
}
