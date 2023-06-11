import { Component } from '@angular/core';
import { ToastService } from './Services/toast-service.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hyre';
  toastMessage!: string;
  toastVisible=false;
  toastSuccess!:boolean;
  constructor(
    private router: Router,
    private toastService: ToastService,
    
    
  ) {
    // titleService.setTitle(this.title);
    // iconSet singleton
  }

  ngOnInit(): void {
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //     return;
    //   }
    // });
    
    this.toastService.toastEvent.subscribe((data:any) => {
        data=JSON.parse(data)
        this.toastMessage = data.message;
        this.toastSuccess=data.success;
        console.log(this.toastMessage)
        this.show()
      });
    
  }
  show(){
    if(this.toastMessage.length==0){
      return
    }
    this.toastVisible=true
      setTimeout(()=>{
        this.toastVisible=false
        this.toastMessage=""
      },4000)
    }
  
}
