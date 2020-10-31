import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  configUrl:any;

  constructor(public http:HttpClient) { }
getUserList(){
return this.callServiceget('api/users');
}
  callServicePost(urlCall,data){
    this.configUrl='';
    this.configUrl='https://reqres.in/'+urlCall;
   return  this.http.post(this.configUrl,data,{ observe: 'response' });

  }
  callServiceget(urlCall){
    this.configUrl='';
    this.configUrl='https://reqres.in/'+urlCall;
   return  this.http.get(this.configUrl);

  }
}
