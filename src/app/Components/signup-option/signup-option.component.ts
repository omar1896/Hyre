import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-signup-option',
  templateUrl: './signup-option.component.html',
  styleUrls: ['./signup-option.component.css']
})
export class SignupOptionComponent {
  @Input() title: any

  constructor(){

  }
}