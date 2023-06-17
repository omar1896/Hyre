import { Component, Inject, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA , MatDialogRef   } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) public data: {title: string,body:string,cancelButton:string,nextButton:string}) { }
  // @Input()title="";
  // @Input() body="";
  // @Input() cancelButton="";
  // @Input() nextButton="";

  onNextClick(): void {
    this.dialogRef.close(true);
  }
}
