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
      new member(1,"高寿山1","拉拉啊","fds","fds","432","432",false),
      new member(2,"高寿山2","拉拉啊","fds","fds","432","432",false),
      new member(3,"高寿山3","拉拉啊","fds","fds","432","432",false),
    ]
  }
  updateMember(i){
    console.log("updateMember--i="+i)
    console.log(this.members[i])
    this.members[i].isUpdateModel=true;
  }
  cancelupdateMember(i){
    this.members[i].isUpdateModel=false;
  }
  deleteMember(i){
    this.members.splice(i,1);
  }
  updateConfrimMember(i){ 
    this.members[i].isUpdateModel=false;
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
    public isUpdateModel:boolean
  ) { }
}