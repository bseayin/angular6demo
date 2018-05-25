import { Component, OnInit } from '@angular/core';
import { updateLocale } from 'ngx-bootstrap/chronos/locale/locales';

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
      new member(1,"安图恩","高寿山","999@22","11236254512","组长","扫地僧"),
      new member(2,"安图恩","高寿山","999@22","11236254512","组长","扫地僧"),
      new member(3,"安图恩","高寿山","999@22","11236254512","组长","扫地僧"),
      new member(4,"安图恩","高寿山","999@22","11236254512","组长","扫地僧"),
      new member(5,"安图恩","高寿山","999@22","11236254512","组长","扫地僧"),

    ]
  }
  updateMember(){
    console.log(33);
   }

}
export class member{
  constructor(
    public id:number,
    public name:string,
    public realname: string,
    public memberemail:string,
    public phonenumber:string,
    public character:string,
    public identify:string
  ) { }
 
}
