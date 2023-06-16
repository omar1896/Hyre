import { Component , EventEmitter, Input , Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent {
  @Input() cardTitle: string
  @Input() cardContent: string
  @Input() btnTitle: string
  @Input() btnBgColor: string
  @Input() btnFontColor: string
  @Output() clicked = new EventEmitter()

  constructor(){
    this.btnTitle = "Add Position"
    this.cardContent = "You're here to hire someone right? Creating and activating a position is the first step towards that"
    this.cardTitle = "Add a Position"
    this.btnBgColor = "#4CABCD"
    this.btnFontColor = "#FFFFFF"
  }

  onClick(){
    this.clicked.emit()
  }

}
