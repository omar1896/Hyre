import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-success-payment',
  templateUrl: './success-payment.component.html',
  styleUrls: ['./success-payment.component.css']
})
export class SuccessPaymentComponent implements OnInit {

  private subData: any
  constructor(private companyService: CompanyService){
    const storedData: any = localStorage.getItem('myData');
    this.subData = JSON.parse(storedData);
    console.log(this.subData)
  }

  ngOnInit(): void {
    if(this.subData){
      this.companyService.changeSubscription(this.subData).subscribe({
        next:(response: any)=>{
          console.log(response)
        }
      })
    }
  }


}
