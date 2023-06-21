import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../Services/candidate.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
})
export class CandidateComponent implements OnInit {
  candidates: any;
  constructor(
    private candidateService: CandidateService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.candidates = this.candidateService.getCandidates().subscribe({
      next: (response: any) => {
        this.candidates = response.data;
        console.log(this.candidates)
      },
    });
  }

  deleteCandidate(id: any) {
    this.openDialog(id)
  }

  scheduleInterview(id: any, position: string) {
    this.router.navigate(['/dashboard/candidates', id], {
      queryParams: { positionName: position },
    });
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
        this.candidateService.deleteCandidate(id).subscribe({
          next: (response: any) => {
            this.candidates = response.data;
            },
        });
      }

    });
  };
}

