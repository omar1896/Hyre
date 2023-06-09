import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.css']
})
export class RoundedButtonComponent {
  @Input() color: string ="#D9DBDE"
  @Input() title: string ="Get Started"

  constructor(){
  }
  doSomeThing(){
  }

}
