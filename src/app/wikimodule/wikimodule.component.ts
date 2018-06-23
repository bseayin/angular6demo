import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wikimodule',
  templateUrl: './wikimodule.component.html',
  styleUrls: ['./wikimodule.component.css']
})
export class WikimoduleComponent implements OnInit {

  item1="nav-link  "
  item2="nav-link "
  constructor() { }

  ngOnInit() {
  }
  clickItem2(item:any){
    this.item1="nav-link";
    this.item2="nav-link";
if("A"==item){
  this.item1="nav-link active";
}
if("B"==item){
  this.item2="nav-link active";
}
  }
}
