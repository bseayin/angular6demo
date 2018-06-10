import { Component, OnInit } from '@angular/core';
import { MemberlistService } from './membermg.service';
import { Member } from './member';
import { User } from './user'
@Component({
  selector: 'app-membermg',
  templateUrl: './membermg.component.html',
  styleUrls: ['./membermg.component.css']
})
export class MembermgComponent implements OnInit {

 members:Member[];
 users:User[];
 member:Member;
 private delecters:string;
  constructor(private memberlistService: MemberlistService) { }

  ngOnInit() {
    this.getMembers();
    this.invateMember();
  }
  getMembers(): void {
    this.memberlistService.getMembers()
      .subscribe(members => this.members = members);
  }
  invateMember():void{
    this.memberlistService.invateMembers().subscribe(users =>this.users=users);
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
    console.log(member)
    this.memberlistService.updateMember(member).subscribe(delecters=>{
      alert("修改成功");
    })
    member.isUpdateModel=!member.isUpdateModel;
  }
  getChange(uid: number) {
    console.log(uid);
  this.memberlistService.insertMember(uid).subscribe(delecters=>{
        alert("已添加成员");
        location.reload();

  })
  

  }
}

