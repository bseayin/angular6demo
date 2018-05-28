import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subnavbar',
  templateUrl: './subnavbar.component.html',
  styleUrls: ['./subnavbar.component.css']
})
export class SubnavbarComponent implements OnInit {

item1="nav-link "
item2="nav-link "
item3="nav-link "
item4="nav-link "
item5="nav-link "
  constructor() { }

  ngOnInit() {
  }
  clickItem2(item:any){
    this.item1="nav-link";
    this.item2="nav-link";
    this.item3="nav-link";
    this.item4="nav-link";
    this.item5="nav-link";
if("A"==item){
  this.item1="nav-link active";
}
if("B"==item){
  this.item2="nav-link active";
}
if("C"==item){
  this.item3="nav-link active";
}
if("D"==item){
  this.item4="nav-link active";
}
if("E"==item){
  this.item5="nav-link active";
}
  }

}
