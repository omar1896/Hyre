import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.css']
})
export class PositionFormComponent {


  validationForm = new FormGroup({
    name:new FormControl(null,[Validators.minLength(2),Validators.required]),
    vacancies:new FormControl(null,[Validators.min(1),Validators.max(100),Validators.required]),
    description:new FormControl(null,[Validators.minLength(5),Validators.required]),
    end_date:new FormControl(null,Validators.required),
  })

  get NameValid(){
    return this.validationForm.controls["name"].valid;
  }
  get VacanciesValid(){
    return this.validationForm.controls["vacancies"].valid;
  }
  get DescriptionValid(){
    return this.validationForm.controls["description"].valid;
  }
  get DateValid(){
    return this.validationForm.controls["end_date"].valid;
  }


  checkNameDirty(){
    return this.validationForm.controls["name"].dirty;
  }
  checkVacanciesDirty(){
    return this.validationForm.controls["vacancies"].dirty;
  }
  checkDescriptionDirty(){
    return this.validationForm.controls["description"].dirty;
  }
  checkDateDirty(){
    return this.validationForm.controls["end_date"].dirty;
  }


  Add(name:any,vacancies:any,description:any,end_date:any){

    if(this.validationForm.valid){

      let newStudent={name,vacancies,description,end_date};

    }
  }

}
