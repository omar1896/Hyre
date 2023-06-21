import { Component, OnInit } from '@angular/core';
import { navItems } from './_nav';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',

})
export class DefaultLayoutComponent implements OnInit{
  user:any ;
  constructor(private companyService:CompanyService){

  }
  ngOnInit(): void {
    this.companyService.getCompanyInfo().subscribe({
      next:(res:any)=>{

        this.user=res.data

        this.user.image=this.user.image ||"/assets/images/default-log.png"
      },
      error:(err:any)=>{

      }
    })

  }

  public navItems = navItems;
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };


}
