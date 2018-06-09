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
messages:Message[]
  constructor(private PersonalsettingService: PersonalsettingService) { }

  ngOnInit() {
  }

  getMessage() : void{
    this.PersonalsettingService.getAllMessages()
      .subscribe(messages => this.messages = messages);
  }

  
  
}
