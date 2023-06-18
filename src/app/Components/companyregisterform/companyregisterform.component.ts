import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-companyregisterform',
  templateUrl: './companyregisterform.component.html',
  styleUrls: ['./companyregisterform.component.css']
})
export class CompanyregisterformComponent {
  validationForm!:FormGroup;
  errors:any;
  constructor(private fb:FormBuilder,private router:Router,private authservice:AuthService){
    
    this.validationForm  = fb.group({
      name: new FormControl(null,[Validators.required,Validators.nullValidator]),
      subscription:new FormControl(1,[Validators.required]),
      user: fb.group({
        email:  new FormControl(null,[Validators.required, Validators.email]) ,
        name: new FormControl(null,[Validators.required,Validators.nullValidator]),
        username : new FormControl (null,[Validators.required , Validators.minLength(3)]) ,
        password: new FormControl(null,[ Validators.required, Validators.minLength(10), Validators.maxLength(60) ]) ,
        password_confirm : new FormControl(null , [Validators.required , Validators.minLength(10), Validators.maxLength(60) ]) 
    }),
  })
}


  onSubmit() {
    this.validationForm.valid
    let name=this.validationForm.controls["user"].get("name")
    name?.setValue(this.name.value)
    if (this.validationForm.valid ) {
      this.authservice.register(this.validationForm.value).subscribe({
        next:(res:any)=>{
          this.router.navigateByUrl("signup")
        },
        error:(err:any)=>{
          this.errors=err.error.data
        }
      })
    }
  }


  get email () {
    return this.validationForm.controls["user"].get("email");
  }

  get username () {
    return this.validationForm.controls["user"].get("username");
  }
  get name () {
    return this.validationForm.controls["name"];
  }

  get password () {
    return this.validationForm.controls["user"].get("password");
  }

  get confirmPassword () {
    return this.validationForm.controls["user"].get("password_confirm");
  }
  get subscription () {
    return this.validationForm.controls["subscription"];
  }



  arePasswordsEqual() {
    if (  this.confirmPassword?.value ==  this.password?.value) {
      return true;
    }
      return false;
  }
}
