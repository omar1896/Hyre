import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  constructor(){}

  @Input() type: string = "Bootstrap"
  @Input() price: string = "Free"
  @Input() description: string = "All the basics for one position or pool"
  @Input() image: string = "assets/images/free-sub.jpg"

}
