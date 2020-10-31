// import { Component, ElementRef, ViewChild } from '@angular/core';
import { Component } from "@angular/core";
import { ApiServiceService } from 'src/app/api-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddComponentComponent } from './add-component/add-component.component';
import { UpdateComponentComponent } from './update-component/update-component.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'front';
  listresData: any;


  headerElements=['S.No','First Name','Last Name','Mail Id','Action']
  successMsg: string;



  constructor(public serviceCall:ApiServiceService, public dialog: MatDialog){
  }
  ngOnInit(){
    this.serviceCall.getUserList()
    .subscribe((data:any) =>{
      if(data){
      this.listresData=data.data;
      }

    });

  }

  insertData(){
    // console.log(this.apiresData)
    let addData: any ={};

     addData = { name: "Company Inc 2", address: "Highway 372" };

  }
  AddPopup(){
    const dialogRef = this.dialog.open(AddComponentComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result==200){
        this.successMsg="Data Added Successfully";
      }
    });


  }
  update(name){
    const dialogRef = this.dialog.open(UpdateComponentComponent, {
      data: { name: name },

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result==200){
        this.successMsg="Data Updated Successfully";
      }
    });
  }
}


