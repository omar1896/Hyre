import { Component, OnInit } from '@angular/core';
import { ApplicantService } from 'src/app/Services/applicant.service';
import { PositionServiceService } from 'src/app/Services/position-service.service';
@Component({
  selector: 'app-dashboard-applicant',
  templateUrl: './dashboard-applicant.component.html',
  styleUrls: ['./dashboard-applicant.component.css']
})
export class DashboardApplicantComponent implements OnInit {

  applicants: any = [];
  positions: any = [];
  selectedPosition: number | null = null;
  constructor(private applicantService: ApplicantService, private getPositions: PositionServiceService) { }
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
        else {
          console.log(data.message);
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
        else {
          console.log(data.message);
        }
      }
    });
  }

  delete(applicant_id: any) {
    this.applicantService.deleteData(applicant_id).subscribe({
      next: (data: any) => {
        if (data.success) {
          this.fetchApplicants();
        }
        else {
          console.log(data.message);
        }
      }
    });
  }

  onPositionChange() {
    if (this.selectedPosition === null) {
      this.fetchApplicants();
    } else {
      this.applicantService.getDataByPosition(this.selectedPosition).subscribe({
        next: (data: any) => {
          if (data.success) {
            console.log(data);
            this.applicants = data['data'];
          } else {
            console.log(data.message);
          }
        }
      });
    }
  }
  
  showAlert() {
    // (click)="showAlert($event)"
  }
}
