import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/Services/subscription.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isMonthly:boolean;
  bootstrap: any
  startup: any
  business: any

  constructor(private subscriptionService: SubscriptionService ){
    this.isMonthly = true
  }
  ngOnInit(): void {
    this.subscriptionService.getSubscriptions().subscribe({
      next:(response: any)=>{
        const subscriptions = response.data
        this.bootstrap = subscriptions.filter((sub: any) => sub.name == "Bootstrap");
        this.startup = subscriptions.filter((sub: any) => sub.name == "Startup");
        this.business = subscriptions.filter((sub: any) => sub.name == "Business")
      },
      error:()=>{

      }
    })
  }
}
