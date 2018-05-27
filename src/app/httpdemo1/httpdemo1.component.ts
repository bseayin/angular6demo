import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import "rxjs/Rx";
@Component({
  selector: 'app-httpdemo1',
  templateUrl: './httpdemo1.component.html',
  styleUrls: ['./httpdemo1.component.css']
})
export class Httpdemo1Component implements OnInit {
  dataSource: Observable<any>;
  dataSet: Array<any> = [];
  constructor(private http: Http) {
    this.dataSource = this.http.get("/codebuilder/resumeRetrievaltt").map((res) => res.json());
   }

  ngOnInit() {
    this.dataSource.subscribe(
      (data) => this.dataSet = data
    )
  }

}
