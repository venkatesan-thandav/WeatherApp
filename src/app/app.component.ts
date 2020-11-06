// import { Component, ElementRef, ViewChild } from '@angular/core';
import { Component } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';

import { forkJoin } from 'rxjs';
import { AddCityComponent } from './add-city/add-city.component';
import { ApiServiceService } from "./api-service.service";





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'front';
  listresData: any;

  wheatherRes:any=[{},{},{},{},{},{},{},{},{}];
  headerElements=['S.No','First Name','Last Name','Mail Id','Action']
  successMsg: string;
cityList:any=[];


  constructor(public serviceCall:ApiServiceService,public modal:NgbModal){
  }
  ngOnInit(){
    let cityList=[{}];
    localStorage.setItem('cityList', JSON.stringify(cityList));

  }

  addCity(pos){

const modalRef = this.modal.open(AddCityComponent);
modalRef.componentInstance.postion = pos;
modalRef.result.then((result) => {
  if (result) {
  console.log(result);
  this.cityList=result;
  this.weatherreport();
  }
  }); 
  }
weatherreport(){
  let response:any=[];
    let index=0;
    this.cityList.forEach((element) => {
      console.log(element)
      this.serviceCall.getUserList(element).subscribe((data:any)=>{
        this.wheatherRes[index]=data;
      });

index++;
    });
}
  wetherresponse(): Observable<any[]>{
    
    
  }
}


           