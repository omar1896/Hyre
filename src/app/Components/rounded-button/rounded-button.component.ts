import { Input , Output , EventEmitter } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.css']
})
export class RoundedButtonComponent {
  @Input() bgColor: string ="#D9DBDE"
  @Input() fontColor: string ="white"
  @Input() title: string ="Get Started"
  @Input() type: string ="button"
  @Output() clicked = new EventEmitter()

  constructor(){
  }
  onClick(){
    this.clicked.emit()
  }

}
