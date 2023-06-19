import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navElement: any
  isLogedIn=false;
  constructor (private authService:AuthService) { }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.scrollY > 0) {
      this.navElement.classList.add("nav-scrolled");
    } else {
      this.navElement.classList.remove("nav-scrolled");
    }
  }

  ngOnInit(): void {
    this.navElement = document.getElementById('bg-screen-nav');
    this.isLogedIn=this.authService.isLogedIn()
  }
  logout(){
    this.authService.logout()
    this.isLogedIn=this.authService.isLogedIn()
  }
}
