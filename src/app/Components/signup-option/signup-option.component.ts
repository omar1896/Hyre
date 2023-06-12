import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-option',
  templateUrl: './signup-option.component.html',
  styleUrls: ['./signup-option.component.css']
})
export class SignupOptionComponent {
  @Input() title: string
  @Input() route: string
  @Input() image: string
  @Input() btnTitle: string
  @Input() btnColor: string
  @Input() btnBgColor: string

  constructor(private router: Router){
    this.title = "Have an account?"
    this.image = "assets/images/run.png"
    this.btnTitle = "Sign Up"
    this.btnColor = "black"
    this.btnBgColor = "black"
    this.route = "/signup"
  }

  onClick(){
    this.router.navigateByUrl(this.route)
  }
}
