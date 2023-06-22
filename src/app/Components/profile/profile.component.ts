import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { CompanyService } from 'src/app/Services/company.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  imageForm: any;
  user:any ;
  company:any ;
  isAdmin?:Boolean;
  infoForm:FormGroup;
  passwordForm:FormGroup;
  errors:any;
  constructor(private companyService:CompanyService,private authService:AuthService,private router:Router,
    private dialog: MatDialog
    ){
    this.imageForm = new FormGroup({
      profileImage: new FormControl(null),
    });
    this.infoForm = new FormGroup({
      email:  new FormControl(null,[Validators.required, Validators.email]) ,
      name: new FormControl(null,[Validators.required,Validators.nullValidator]),
    });
    this.passwordForm = new FormGroup({
      password: new FormControl(null,[ Validators.required, Validators.minLength(10), Validators.maxLength(60) ,Validators.required]) ,
      password_confirm : new FormControl(null , [Validators.required , Validators.minLength(10), Validators.maxLength(60),Validators.required ])
    });
  }
  ngOnInit(): void {
    this.authService.getUser().subscribe({
      next:(res:any)=>{

        this.user=res.data
        this.isAdmin=this.user?.groups[0]?.id==1
        this.infoForm.patchValue(this.user)
      },
      error:(err:any)=>{
      }
    })
    this.companyService.getCompanyInfo().subscribe({
      next:(res:any)=>{

        this.company=res.data
        this.company.image=this.company.image || "/assets/images/default-log.png"
      },
      error:(err:any)=>{

      }
    })

  }
  onFileSelected(event: any) {
    if (this.validateFile(event.target.files[0].name)) {
      this.user.image = event.target.files[0];
      return;
    }
  }

  validateFile(name: string) {
    let ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'png' || ext.toLowerCase() == 'jpg'|| ext.toLowerCase() == 'webp') {
      return true;
    } else {
      return false;
    }
  }

  changeImage() {
    const fd = new FormData();
    fd.append('image', this.user.image);
    this.companyService.changelogo( fd).subscribe({
      next: (response: any) => {
        this.company.image = response.data['image'];
      },
    });
  }
  update(){
    if(this.infoForm.valid){
      this.authService.updateUser(this.infoForm.value).subscribe({
        next:(res:any)=>{

          this.user=res.data
          this.isAdmin=this.user?.groups[0]?.id==1
        },
        error:(err:any)=>{
          this.errors=err.error.data
        }
      })
    }
  }

  get email () {
    return this.infoForm.controls["email"];
  }


  get name () {
    return this.infoForm.controls["name"];
  }
  get password () {
    return this.passwordForm.controls["password"];
  }

  get confirmPassword () {
    return this.passwordForm.controls["password_confirm"];
  }
  arePasswordsEqual() {
    if (  this.confirmPassword?.value ==  this.password?.value) {
      return true;
    }
      return false;
  }

  changepassword(){
    if(this.passwordForm.valid){
      this.authService.changePassword(this.passwordForm.value).subscribe({
          next:(res:any)=>{
            console.log(res)
          },
          error:(err:any)=>{
            console.log()
          }
        })
    }
  }

  openDialog(id: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Delete',
        body: 'Are You Sure to Delete ?',
        cancelButton: 'Cancel',
        nextButton: 'Confirm'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.authService.deleteUser(id).subscribe({
          next:(res:any)=>{

            this.authService.logout()
            this.router.navigateByUrl("home")
          },
          error:(err:any)=>{
            console.log()
          }
        })
      }

    });
  };

  deleteUser(){
    this.openDialog(this.user.id)
    // this.authService.deleteUser(this.user.id).subscribe({
    //   next:(res:any)=>{

    //     this.authService.logout()
    //     this.router.navigateByUrl("home")
    //   },
    //   error:(err:any)=>{
    //     console.log()
    //   }
    // })
  }
}
