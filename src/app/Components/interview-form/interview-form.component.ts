import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InterviewService } from 'src/app/Services/interview.service';

@Component({
  selector: 'app-interview-form',
  templateUrl: './interview-form.component.html',
  styleUrls: ['./interview-form.component.css']
})
export class InterviewFormComponent {
  form: FormGroup
  selectedDate: Date
  selectedTime: string
  applicantId: any
  positionName: any

  constructor(
    private route: ActivatedRoute,
    private InterviewService: InterviewService
    ) {
    this.selectedDate = new Date()
    this.selectedTime = ''
    this.form = new FormGroup({
      date: new FormControl(this.selectedDate,[Validators.required]),
      time: new FormControl(null,[Validators.required])
    });

    const paramMap: any = this.route.snapshot.paramMap;
    this.applicantId = +paramMap.get('id');
    const queryParamMap = this.route.snapshot.queryParamMap;
    this.positionName = queryParamMap.get('positionName');
  }

  onSubmit() {
    if(this.form.valid){
      const data = this.form.value
      const date = this.parseTimeAndConcat(data.date, data.time)
      const interview = {applicant:this.applicantId , position:+this.positionName, date}
      this.InterviewService.createInterview(interview).subscribe({
        next: (response: any) =>{
        }
      })
    }
  }

  parseTimeAndConcat(date: Date , time: string){
    const timeParts = time.split(':')
    let hours = parseInt(timeParts[0], 10)
    const minutes = parseInt(timeParts[1], 10)
    const isPM = time.indexOf('PM') > -1
    if (isPM && hours < 12) {
      hours += 12;
    }
    let dateObj = {hours , minutes}
    return this.concatDate(date , dateObj)
  }

  concatDate(date1: Date , date2: any  ){

    const date = new Date(date1)
    date.setHours(date2.hours)
    date.setMinutes(date2.minutes)
    date.setSeconds(0)
    date.setMilliseconds(0)

    return date
  }

  get time () {
    return this.form.controls["time"].valid;
  }

  get date () {
    return this.form.controls["date"].valid;
  }

  isDateDirty(){
    return this.form.controls["date"].dirty;
  }
  isTimeDirty(){
    return this.form.controls["time"].dirty;
  }
}
