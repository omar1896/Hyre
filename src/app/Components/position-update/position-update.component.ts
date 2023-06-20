import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PositionServiceService } from 'src/app/Services/position-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-position-update',
  templateUrl: './position-update.component.html',
  styleUrls: ['./position-update.component.css']
})
export class PositionUpdateComponent {
  errors:any
  ID:any;
  position:any;
  validationFormUpdate:any;
  constructor(myRoute:ActivatedRoute,public myService: PositionServiceService,private router:Router){
    this.ID = myRoute.snapshot.params["id"];

  }
  ngOnInit(): void {
    this.myService.GetPositionByID(this.ID).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.position = data;
          console.log(this.position['data']['position']['name']);
          this.validationFormUpdate = new FormGroup({
            name:new FormControl(this.position['data']['position']["name"],[Validators.minLength(2),Validators.required]),
            vacancies:new FormControl(this.position['data']['position']["vacancies"],[Validators.min(1),Validators.max(100),Validators.required]),
            description:new FormControl(this.position['data']['position']["description"],[Validators.minLength(5),Validators.required]),
            end_date:new FormControl(this.position['data']['position']["end_date"],Validators.required),
          })
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

  get NameValid(){
    return this.validationFormUpdate.controls["name"].valid;
  }
  get VacanciesValid(){
    return this.validationFormUpdate.controls["vacancies"].valid;
  }
  get DescriptionValid(){
    return this.validationFormUpdate.controls["description"].valid;
  }
  get DateValid(){
    return this.validationFormUpdate.controls["end_date"].valid;
  }



    Add(name:any,vacancies:any,description:any,end_date:any){

      if(this.validationFormUpdate.valid){


        console.log(this.validationFormUpdate.value);

        this.myService.UpdatePosition(this.ID,this.validationFormUpdate.value).subscribe({
          next:(res:any)=>{
            this.router.navigateByUrl("/dashboard/positions")
          },
          error:(err:any)=>{
            this.errors=err.error.data
          }
        });


      }
    }
}
