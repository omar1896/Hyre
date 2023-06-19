import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StripeService } from 'src/app/Services/stripe.service';

@Component({
  selector: 'app-change-subscription',
  templateUrl: './change-subscription.component.html',
  styleUrls: ['./change-subscription.component.css']
})
export class ChangeSubscriptionComponent {

  constructor(private stripe: StripeService){}

  subscriptionForm = new FormGroup({
    name: new FormControl('Bootstrap'),
    type: new FormControl('Monthly')
  });

  onSubmit() {
    const formData = this.subscriptionForm.value;
    localStorage.setItem('subData', JSON.stringify(formData));
    this.stripe.createCheckoutSession(formData).subscribe(
      (response: any) => {
        console.log(response)
        window.location.href = response.url;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
