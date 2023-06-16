import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  candidates: any
  constructor(){
    this.candidates = [{id: 1 , name:"mohamed" , email: "13mohamed.yossef@gmail.com" , position:"Fullstack developer" , hasInterview: true}]
  }
  ngOnInit(): void {
      // send http request to server to retrieve data of this.candidates
  }

  deleteCandidate(id: any){
    // will send http req to delete this candidate
  }

  scheduleInterview(){

  }

  cancelInterview(){

  }

}
