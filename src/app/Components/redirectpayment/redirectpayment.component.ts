import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StripeService } from 'src/app/Services/stripe.service';

@Component({
  selector: 'app-redirectpayment',
  templateUrl: './redirectpayment.component.html',
  styleUrls: ['./redirectpayment.component.css']
})
export class RedirectpaymentComponent implements OnInit{
  cId:any;
  prId:any;
  constructor(private route:ActivatedRoute,private router :Router,private stripeService:StripeService){
    this.cId=this.route.snapshot.params["cId"]
    this.prId=this.route.snapshot.params["prId"]
    console.log(this.cId,this.prId)
  }
  ngOnInit(): void {
    this.stripeService.redirect(`/${this.cId}/${this.prId}`,{}).subscribe({
      next:(res:any)=>{
        window.location.href = res.url;
      }
    })

  }

}
