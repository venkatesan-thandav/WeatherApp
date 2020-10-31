import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiServiceService } from '../api-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {
  errorMsg: any;
  updateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    job: new FormControl('', Validators.required),
  });
  constructor(public dialogRef: MatDialogRef<UpdateComponentComponent>, public serviceCall: ApiServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.updateForm.controls['name'].setValue(this.data['name'])
  }

  close() {
    this.dialogRef.close();
  }
  update() {
    console.log(this.updateForm.value);
    let body = { name: this.updateForm.value['name'], job: this.updateForm.value['job'] };
    this.serviceCall.callServicePost('api/update', body).subscribe((res: any) => {
      if (res.status == 201) {
        this.dialogRef.close(200);
      }
    },
      error => {
        this.errorMsg = error.error.error;
      })


  }
}
