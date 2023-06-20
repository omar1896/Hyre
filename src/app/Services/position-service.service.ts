import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionServiceService {

  constructor(private readonly myClient:HttpClient) { }

  private readonly Base_URL = "http://localhost:8000/tenant/positions";

  GetAllPositions(){
    console.log("Hello");
    
    return this.myClient.get(this.Base_URL);
  }


  GetPositionByID(id:any){
    return this.myClient.get(this.Base_URL+"/"+id);
  }
  AddNewPosition(newPosition:any){
    return this.myClient.post(this.Base_URL, newPosition);
  }
  UpdatePosition(id:any,position:any){
    return this.myClient.patch(this.Base_URL+"/"+id, position);
  }
  DeletePosition(id:any){
    return this.myClient.delete(this.Base_URL+"/"+id);
  }

}
