import { Component , DoCheck } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements DoCheck{
  ngDoCheck(): void {
    console.log(this.isMonthly)
  }
  isMonthly:boolean = true
}
