import { Component, OnInit } from '@angular/core';
import { PersonalWiki } from './personalWiki' 
import { PersonalWikiService } from './personalwiki.service';

@Component({
  selector: 'app-personalwiki',
  templateUrl: './personalwiki.component.html',
  styleUrls: ['./personalwiki.component.css']
})
export class PersonalwikiComponent implements OnInit {
  PersonalWikis:PersonalWiki[];
  private content:String
  constructor(private PersonalWikiService:PersonalWikiService) { }

  ngOnInit() {
    this.getWikis()
  }
  getWikis(): void{
    this.PersonalWikiService.getWikis()
    .subscribe(PersonalWikis => this.PersonalWikis = PersonalWikis);
  }
  showcontent(content1){
    this.content=content1.content;
   }
}
