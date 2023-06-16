import { Component, OnInit } from '@angular/core';
import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit{
  user:any = {
    _id : 15 ,
    image : "assets/images/iti-logo.png", // Will be dynamic from a service
    name : "Ahmed Zein",
    company : "Information technology institute"
  };
  constructor(){

  }
  ngOnInit(): void {

  }

  public navItems = navItems;
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };


}
