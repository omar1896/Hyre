import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navElement: any
  constructor () { }
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
  }
}
