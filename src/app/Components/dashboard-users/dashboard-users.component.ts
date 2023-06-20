import { Component, OnInit } from '@angular/core';
import{AuthService} from 'src/app/Services/auth.service'

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent implements OnInit {
users:any

constructor(private myClient:AuthService){


}

ngOnInit(): void {
   this.getAllUsers()
}

deleteUser(event:any){
  console.log(event)
  console.log("delete")
this.myClient.deleteUser(event.target.id).subscribe({next:(res:any)=>{
this.getAllUsers()
  console.log(res)

},
error:(err:any)=>{
  console.log(err)
}})
}


getAllUsers=()=>{
   this.myClient.getAllUsers().subscribe({
    next: (data: any) => {
      if (data.success) {
        this.users = data["data"];
        console.log(this.users)
      }
      else {
        console.log(data.message);
      }
    }
  });
}
}


