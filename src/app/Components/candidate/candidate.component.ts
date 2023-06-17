import { Component, OnInit } from '@angular/core';
import {CandidateService} from '../../Services/candidate.service'
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  candidates: any
  constructor(
    private candidateService: CandidateService,
    public dialog: MatDialog,
    private router: Router
    ){}

  ngOnInit(): void {
    this.candidates = this.candidateService.getCandidates().subscribe({
      next:(response: any)=>{
        this.candidates = response.data
      }
    })
  }

  deleteCandidate(id: any){

      this.candidateService.deleteCandidate(id).subscribe({
        next:(response: any)=>{
          this.candidates = response.data
        }
      })
  }

  cancelInterview(data: any){

    // this.candidateService.deleteInterview(data).subscribe({
    //   next: (response)=>{
    //       console.log(response)
    //   },
    //   error: ()=>{

    //   }

    // })

  }
  scheduleInterview(id: any , position: string){
    this.router.navigate(
      ['/dashboard/candidates', id],
      { queryParams: { positionName: position }});
  }


    // openDialog() {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     data: {
  //       title: 'Hello world',
  //       body: '<p>mohamed yossef</p>',
  //       cancelButton: 'Cancel',
  //       nextButton: 'Next'
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === true) {
  //       const nextDialogRef = this.dialog.open(DialogComponent, {
  //         data: {
  //           title: 'Second dialog',
  //           body: '',
  //           cancelButton: 'Cancel',
  //           nextButton: 'Next'
  //         }
  //       });

  //       nextDialogRef.afterClosed().subscribe(result => {
  //         console.log(`Second dialog result: ${result}`);
  //       });
  //     }
  //   });
  // }

}
