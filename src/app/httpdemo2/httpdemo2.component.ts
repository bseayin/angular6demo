import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpserviceService } from './httpservice.service';

@Component({
  selector: 'app-httpdemo2',
  templateUrl: './httpdemo2.component.html',
  providers: [ HttpserviceService ],
  styleUrls: ['./httpdemo2.component.css']
})

export class Httpdemo2Component implements OnInit {

  constructor(private http: HttpClient,private httpserviceService:HttpserviceService) { }

  ngOnInit() {
  }


}
