import { Component } from '@angular/core';
import { ToastService } from './Services/toast-service.service';
import { Router, NavigationEnd } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from "./Components/dialog/dialog.component"
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';

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
    public dialog: MatDialog,
    private iconSetService: IconSetService,
  ) {
    iconSetService.icons = { ...iconSubset };

  }

  ngOnInit(): void {

    this.toastService.toastEvent.subscribe((data:any) => {
        data=JSON.parse(data)
        this.toastMessage = data.message;
        this.toastSuccess=data.success;
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

    openDialog(){
      const dialogRef = this.dialog.open(DialogComponent,{data:{
        title:"hello world",
        body:"this is my body",
        cancelButton:"cancel",
        nextButton:"next"
      }
      });
    }
}
