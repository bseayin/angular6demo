import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binddemo',
  templateUrl: './binddemo.component.html',
  styleUrls: ['./binddemo.component.css']
})
export class BinddemoComponent implements OnInit {

  constructor() { }

  doublebindval:string;

  ngOnInit() {
    this.doublebindval="init";
  }

  doOninput(event:any) {
    console.log(event)
    console.log(event.target.value)
  }

}
