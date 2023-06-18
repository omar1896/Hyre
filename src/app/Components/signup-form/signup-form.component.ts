import { Component, EventEmitter, Input , Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  @Input() options: any
  @Input() btnOptions: any
  @Output() submitted = new EventEmitter()
  public userData : any = {}
  public error!:string|null;
  public validationForm:FormGroup ;
  constructor(){
    this.options = {
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
      forgetPassword: false
    }
    this.validationForm = new FormGroup({
      email: this.options.email ? new FormControl(null,[Validators.required, Validators.email]) : new FormControl({value: null, disabled: true}),
      username : this.options.name ? new FormControl (null,[Validators.required , Validators.minLength(3)]) : new FormControl({value: null, disabled: true}),
      password: this.options.password ? new FormControl(null,[ Validators.required, Validators.minLength(10), Validators.maxLength(60) ]) : new FormControl({value: null, disabled: true}),
      confirmPassword : this.options.confirmPassword ? new FormControl(null , [Validators.required , Validators.minLength(10), Validators.maxLength(60) ]) : new FormControl({value: null, disabled: true})
    });
  }


  onSubmit() {
    console.log("before send")
    if (this.validationForm.valid ||
        (this.validationForm.controls["email"].valid && this.validationForm.controls["password"].valid) ||
        (this.validationForm.controls["email"].valid && !this.options.password)) {
      this.submitted.emit(this.validationForm.value);
      console.log("sending")
    }
  }

  get email () {
    return this.validationForm.controls["email"].valid;
  }

  get username () {
    return this.validationForm.controls["username"].valid;
  }

  get password () {
    return this.validationForm.controls["password"].valid;
  }

  get confirmPassword () {
    return this.validationForm.controls["confirmPassword"].valid;
  }

  isEmailDirty(){
    return this.validationForm.controls["email"].dirty;
  }
  isUsernameDirty(){
    return this.validationForm.controls["username"].dirty;
  }
  isPasswordDirty(){
    return this.validationForm.controls["password"].dirty;
  }

  isConfirmPasswordDirty(){
    return this.validationForm.controls["confirmPassword"].dirty;
  }

  arePasswordsEqual() {
    if (  this.validationForm.controls["password"].value ==  this.validationForm.controls["confirmPassword"].value) {
      return false;
    }
    else {
      return true;
    }
  }

}
