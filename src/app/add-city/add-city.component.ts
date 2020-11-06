import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
@Input() postion:any;


cityName:any;
maintainCity:any=JSON.parse(localStorage.getItem('cityList'));
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  addCity(){
this.maintainCity[this.postion]=this.cityName;
console.log(this.maintainCity)
localStorage.setItem('cityList', JSON.stringify(this.maintainCity));
this.activeModal.close(this.maintainCity);


  }
}
