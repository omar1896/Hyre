import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ApplicantService } from 'src/app/Services/applicant.service';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/Services/company.service';
@Component({
  selector: 'app-create-applicants',
  templateUrl: './create-applicants.component.html',
  styleUrls: ['./create-applicants.component.css']
})
export class CreateApplicantsComponent implements OnInit {
  applicantForm: FormGroup;
  company : any =  {
    image : "assets/images/iti-logo.png",
    positions: []
  };

  
  constructor(private sendApplicantData : ApplicantService, private getCompanyPositions : CompanyService  ,private route: ActivatedRoute ) {
    this.applicantForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(100)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      gender: new FormControl('', [Validators.required]),
      edu_degree: new FormControl('', [Validators.required, Validators.maxLength(128)]),
      position : new FormControl (null , [Validators.required]),
      birthday : new FormControl(null , [Validators.required]),
      resume: new FormControl(null,[Validators.required] )
    });
  }


  ngOnInit(): void {
    // const token = this.route.snapshot.paramMap.get('token');
    // console.log(token); // Use the parameter value as needed 
    this.getCompanyPositions.getCompanyData('26c723dba01d5869a973cc28bd986566c7975f7c').subscribe({
      next:(data :any)=>{
        if(data.success){
          console.log(data); // Positions 
          this.company["positions"] = data['data']; // array
        }
        else{
          console.log(data.message);
        }
      }
    });
  }

  submitForm() {
    if (this.applicantForm.valid) {
      const formData = new FormData();
      formData.append('name', this.applicantForm.value.name);
      formData.append('email', this.applicantForm.value.email);
      formData.append('mobile', this.applicantForm.value.mobile);
      formData.append('gender', this.applicantForm.value.gender);
      formData.append('edu_degree', this.applicantForm.value.edu_degree);
      formData.append('position' , this.applicantForm.value.position);
      formData.append('birth_date' , this.applicantForm.value.birthday);

      const resumeFormControl = this.applicantForm.get('resume');
      if (resumeFormControl && resumeFormControl.value) {
        const resumeFile = resumeFormControl.value.files?.[0]; // Access the files property safely
        
        if (resumeFile) {
          formData.append('resume', resumeFile);
        }
      }
      
      this.sendApplicantData.sendData(formData).subscribe(
        {
          next:(data:any) => {
            if (data.success){
              console.log(data); // Use Tostar ,  this.route.navigateByUrl ('anguler server route')
            }
            console.log(data.message);
          }
        }
      );
    }
  }

}