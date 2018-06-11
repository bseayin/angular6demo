import { Component, OnInit } from '@angular/core';
import { PersonalsettingService } from './personalsetting.service';
import { Message } from './message';
import * as $ from 'jquery'

@Component({
  selector: 'app-personalsetting',
  templateUrl: './personalsetting.component.html',
  providers: [ PersonalsettingService ],
  styleUrls: ['./personalsetting.component.css']
})
export class PersonalsettingComponent implements OnInit {
messages:Message[];
message:Message;
message2:Message;
  constructor(private PersonalsettingService: PersonalsettingService) { }

  ngOnInit() {
    this.getMessage();
  }
//根据用户获得当前用户的所有消息信息
  getMessage() : void{
    this.PersonalsettingService.getAllMessages()
      .subscribe(messages =>{
        this.messages = messages;
      }) 
  }
//同意邀请
  agree(mes:Message) : void{
    this.PersonalsettingService.agreeDJW(mes).subscribe(message2 =>{
      console.log(message2);
      alert("您已同意加入团队参加项目制作");
      this.getMessage();
    });
  }
  //拒绝邀请
  disagree(mes:Message) : void{
    this.PersonalsettingService.disagreeDJW(mes).subscribe(messages =>{
      alert("您拒绝了请求");
      this.getMessage();
    } )
  }
}
