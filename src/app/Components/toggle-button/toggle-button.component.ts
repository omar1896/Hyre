import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent {

  @Output() toggle = new EventEmitter()
  isChanged: boolean = true

  onClicked(){
    this.isChanged = !this.isChanged
    this.toggle.emit(this.isChanged)
  }

}
