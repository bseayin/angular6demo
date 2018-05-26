import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membermg',
  templateUrl: './membermg.component.html',
  styleUrls: ['./membermg.component.css']
})
export class MembermgComponent implements OnInit {
  private members:Array<member>;
  constructor() { }

  ngOnInit() {
    this.members=[
      new member(1,"高寿山","拉拉啊","fds","fds","432","432"),
      new member(1,"高寿山","拉拉啊","fds","fds","432","432"),
      new member(1,"高寿山","拉拉啊","fds","fds","432","432"),
    ]
  }

}
export class member{
  constructor(
    public id:number,
    public name:string,
    public realname: string,
    public memberemail: string,
    public phonenumber: string,
    public character: string,
    public identify: string,
  ) { }
}