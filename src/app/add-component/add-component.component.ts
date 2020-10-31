import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {
email:any;
password:any;
errorMsg:any;
  constructor(public dialogRef: MatDialogRef<AddComponentComponent>,public serviceCall:ApiServiceService,) { }

  ngOnInit() {
  }
 close(){
   this.dialogRef.close();
 }
 save(){
   let body={email:this.email,password:this.password}
this.serviceCall.callServicePost('api/register',body).subscribe((res:any)=>{
if(res.status==200){
  this.dialogRef.close(200);
}
},
error => {
  this.errorMsg=error.error.error;
})


 }
}
