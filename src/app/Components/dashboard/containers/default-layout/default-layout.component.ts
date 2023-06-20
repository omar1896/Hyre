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
        console.log(res)
        this.user=res.data
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