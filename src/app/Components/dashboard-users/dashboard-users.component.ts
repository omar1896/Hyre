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
   this.users= this.myClient.getAllUsers().subscribe({
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
