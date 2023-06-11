import { Component , DoCheck } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  isMonthly:boolean = true
  onSubmit(data: any){
    console.log("from parent" , data)
  }
}
