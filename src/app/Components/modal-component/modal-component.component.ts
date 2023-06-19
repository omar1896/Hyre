import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent {
  message="";
  @Output() confirm = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) {}

  onConfirm(): void {
    this.confirm.emit(true);
    this.bsModalRef.hide();
  }

  onCancel(): void {
    this.cancel.emit(false);
    this.bsModalRef.hide();
  }
}



// export class ModalComponentComponent {
//   @Input() title="";
//   @Input() message="";
//   @Output() confirm = new EventEmitter();
//   @Output() cancel = new EventEmitter();

//   onConfirm(): void {
//     this.confirm.emit(true);
//   }

//   onCancel(): void {
//     this.cancel.emit(false);
//   }
// }
