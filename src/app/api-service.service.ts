import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  configUrl:any;
apiKey
  constructor(public http:HttpClient) { }
getUserList(data){
return this.callServiceget(data);
}
  callServicePost(data){
    this.configUrl='';
    this.configUrl='https://api.openweathermap.org/data/2.5/weather';
   return  this.http.post(this.configUrl,data,{ observe: 'response' });

  }
  callServiceget(loc){
    
    let apiKey: any='fb45d52f094925f13565d818416e18fe'
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`);

  }
}
