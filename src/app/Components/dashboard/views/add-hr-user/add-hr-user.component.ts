import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-hr-user',
  templateUrl: './add-hr-user.component.html',
  styleUrls: ['./add-hr-user.component.css']
})
export class AddHrUserComponent {
  validationForm!:FormGroup;
  errors:any;
  constructor(private fb:FormBuilder,private router:Router,private authservice:AuthService){
    
    this.validationForm  = fb.group({
      name: new FormControl(null,[Validators.required,Validators.nullValidator]),
      email:  new FormControl(null,[Validators.required, Validators.email]) ,
      username : new FormControl (null,[Validators.required , Validators.minLength(3)]) ,
      password: new FormControl(null,[ Validators.required, Validators.minLength(10), Validators.maxLength(60) ]) ,
      password_confirm : new FormControl(null , [Validators.required , Validators.minLength(10), Validators.maxLength(60) ]) 
  })
}


  onSubmit() {
    if (this.validationForm.valid ) {
      this.authservice.createUser(this.validationForm.value).subscribe({
        next:(res:any)=>{
          this.router.navigateByUrl("dashboard")
        },
        error:(err:any)=>{
          this.errors=err.error.data
        }
      })
    }
  }


  get email () {
    return this.validationForm.controls["email"];
  }

  get username () {
    return this.validationForm.controls["username"];
  }
  get name () {
    return this.validationForm.controls["name"];
  }

  get password () {
    return this.validationForm.controls["password"];
  }

  get confirmPassword () {
    return this.validationForm.controls["password_confirm"];
  }



  arePasswordsEqual() {
    if (  this.confirmPassword?.value ==  this.password?.value) {
      return true;
    }
      return false;
  }
}
