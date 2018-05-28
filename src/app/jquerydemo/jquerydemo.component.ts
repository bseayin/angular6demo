import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-jquerydemo',
  templateUrl: './jquerydemo.component.html',
  styleUrls: ['./jquerydemo.component.css']
})
export class JquerydemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.testJquery();
  }

  testJquery(){
    $("p").append("<b>Hello</b>");
   $("p").fadeIn("slow");

  } 

}
