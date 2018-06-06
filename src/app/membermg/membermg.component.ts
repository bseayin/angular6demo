import { Component, OnInit } from '@angular/core';
import { MemberlistService } from './membermg.service';
import { Member } from './member'
@Component({
  selector: 'app-membermg',
  templateUrl: './membermg.component.html',
  styleUrls: ['./membermg.component.css']
})
export class MembermgComponent implements OnInit {

 members:Member[];
 private delecters:string;
  constructor(private memberlistService: MemberlistService) { }

  ngOnInit() {
    this.getMembers();

  }
  getMembers(): void {
    this.memberlistService.getMembers()
      .subscribe(members => this.members = members);
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
    this.memberlistService.deleteMember(i).subscribe(delecters=>{
      alert("删除成功");
    })
    this.members.splice(i,1);

  }
  updateConfrimMember(member){ 
    this.memberlistService.updateMember(member).subscribe(delecters=>{
      alert("修改成功");
    })
    member.isUpdateModel=!member.isUpdateModel;
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