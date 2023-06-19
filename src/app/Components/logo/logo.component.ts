import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent  {

  @Input() title: string
  @Input() image: string
  @Input() mWidth: string
  constructor(){
    this.title = "Hyre"
    this.image = "assets/images/logo.png"
    this.mWidth = "300px"
  }
  

}
