import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  constructor(private router:Router){}

  @Input() type: string = "Bootstrap"
  @Input() monthlyPrice: string = "Free"
  @Input() annuallyPrice: string = "Free"
  @Input() description: string = "All the basics for one position or pool"
  @Input() image: string = "assets/images/Bootstrap-sub.jpg"
  @Input() btnColor: string = "#035CFF"
  @Input() toggle: boolean = true

  onClick(){
    this.router.navigateByUrl("signup")
  }

}
