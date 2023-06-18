import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private authService:AuthService,private router:Router){

  }

  submit(event:any){
    console.log(event)
    let data={"email":event.email,"password":event.password}
    this.authService.signin(data).subscribe({
      next:(res:any)=>{
        localStorage.setItem("Authorization",res.data.token)
        this.router.navigateByUrl("dashboard")
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }
}
