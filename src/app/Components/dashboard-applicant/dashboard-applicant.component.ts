import { Component, OnInit } from '@angular/core';
import { ApplicantService } from 'src/app/Services/applicant.service';
import { PositionServiceService } from 'src/app/Services/position-service.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard-applicant',
  templateUrl: './dashboard-applicant.component.html',
  styleUrls: ['./dashboard-applicant.component.css']
})
export class DashboardApplicantComponent implements OnInit {

  applicants: any = [];
  positions: any = [];
  selectedPosition: number | null = null;
  generatedLink : any = {
    link : 'http://',
    expiration_date : '**/**/****'
  }
  searchTerm: string = '';

  constructor(private applicantService: ApplicantService,
  private getPositions: PositionServiceService,
  private dialog: MatDialog
  ) { }

  company : any = null;

  ngOnInit(): void {
    this.fetchApplicants();
    this.fetchPositions();
  }

  fetchPositions = () => {
    this.getPositions.GetAllPositions().subscribe({
      next: (data: any) => {
        if (data.success) {
          this.positions = data["data"];
        }

      }
    });
  }
  fetchApplicants = ()=> {
    // Applicants Data
    this.applicantService.getData().subscribe({
      next: (data: any) => {
        if (data.success) {
          this.applicants = data["data"];
        }

      }
    });
  }


  delete(id: any) {
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
        this.applicantService.deleteData(id).subscribe({
          next: (data: any) => {
              this.fetchApplicants();
          }
        });
      }

    });
  };
  onPositionChange() {
    if (this.selectedPosition === null) {
      this.fetchApplicants();
    } else {
      this.applicantService.getDataByPosition(this.selectedPosition).subscribe({
        next: (data: any) => {
          if (data.success) {
            this.applicants = data['data'];
          }
        }
      });
    }
  }

  getGeneratedLink () {
    this.applicantService.generateLink().subscribe({
      next: (data: any) => {
        if (data.success) {
          this.generatedLink['link'] = data['data'].link
          this.generatedLink['expiration_date'] = data['data'].expiration_date
        }
      }
    })
  }

  updateStatus(applicant_id : any){
    this.applicantService.update(applicant_id, 1).subscribe({
      next: (data: any) => {
        if (data.success) {
          this.fetchApplicants();
        }
      }
    })
  }

  copyLink() {
    const linkElement = document.getElementById('copy') as HTMLSpanElement;
    const linkToCopy = linkElement.innerText;
    navigator.clipboard.writeText(linkToCopy)
      .then(() => {
        // Handle successful copy
        console.log('Link copied successfully!');
      })
      .catch((error) => {
        // Handle error
        console.error('Failed to copy link:', error);
      });
  }

  get filteredApplicants() {
    return this.applicants.filter((applicant: { name: string; }) => {
      const name = applicant.name.toLowerCase();
      return name.includes(this.searchTerm.toLowerCase());
    });
  }
  

}
