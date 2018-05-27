import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binddemo1',
  templateUrl: './binddemo1.component.html',
  styleUrls: ['./binddemo1.component.css']
})
export class Binddemo1Component implements OnInit {
  img1="http://placekitten.com/300/300";
  tt="初始值";
  tt2="初始值";
  tt3="初始值";
  isA=true;
  isB=true;
  itemClass1="list-group-item list-group-item-action";
  itemClass2="list-group-item list-group-item-action";
  itemClass3="list-group-item list-group-item-action";
  itemClass4="list-group-item list-group-item-action";
  itemClass5="list-group-item list-group-item-action";

  private members:Array<member>;
  constructor() { }


  ngOnInit() {
    this.members=[
      new member(1,"高寿山1","拉拉啊","fds","fds","432","432",false),
      new member(2,"高寿山2","拉拉啊","fds","fds","432","432",false),
      new member(3,"高寿山3","拉拉啊","fds","fds","432","432",false),
    ]
    
  }
  clickItem(item:any){
    this.itemClass1="list-group-item list-group-item-action";
    this.itemClass2="list-group-item list-group-item-action";
    this.itemClass3="list-group-item list-group-item-action";
    this.itemClass4="list-group-item list-group-item-action";
    this.itemClass5="list-group-item list-group-item-action";
if("A"==item){
  this.itemClass1="list-group-item list-group-item-action active";
}
if("B"==item){
  this.itemClass2="list-group-item list-group-item-action active";
}
if("C"==item){
  this.itemClass3="list-group-item list-group-item-action active";
}
if("D"==item){
  this.itemClass4="list-group-item list-group-item-action active";
}
  }
changeImg(){
  this.img1="http://placekitten.com/600/600";
 }

 onInput(e:any){
console.log(e);
console.log(e.srcElement.value);
 }

 onInput2(e:any){
  console.log(e);
  console.log(e.srcElement.value);
  this.tt2=e.srcElement.value;
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
