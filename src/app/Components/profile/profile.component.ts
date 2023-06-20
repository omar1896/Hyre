import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  validationForm: any;
  user:any ;
  company:any ;
  isAdmin?:Boolean;
  infoForm:FormGroup;
  errors:any;
  constructor(private companyService:CompanyService,private authService:AuthService){
    this.validationForm = new FormGroup({
      profileImage: new FormControl(null),
    });
    this.infoForm = new FormGroup({
      email:  new FormControl(null,[Validators.required, Validators.email]) ,
      name: new FormControl(null,[Validators.required,Validators.nullValidator]),
    });
  }
  ngOnInit(): void {
    this.authService.getUser().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.user=res.data
        this.isAdmin=this.user?.groups[0]?.id==1
        this.infoForm.patchValue(this.user)
      },
      error:(err:any)=>{
      }
    })
    this.companyService.getCompanyInfo().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.company=res.data
        this.company.image=this.company.image || "/assets/images/default-logo.jpeg"
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
          console.log(res)
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
    return this.validationForm.controls["email"];
  }


  get name () {
    return this.validationForm.controls["name"];
  }
}
