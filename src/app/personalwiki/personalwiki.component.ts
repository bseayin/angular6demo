import { Component, OnInit } from '@angular/core';
import { PersonalWiki } from './personalWiki' 
import { PersonalWikiService } from './personalwiki.service';
import * as $ from 'jquery'
@Component({
  selector: 'app-personalwiki',
  templateUrl: './personalwiki.component.html',
  styleUrls: ['./personalwiki.component.css']
})
export class PersonalwikiComponent implements OnInit {
  PersonalWikis:PersonalWiki[];
  private wikicontent:String
  public personalWiki:PersonalWiki;
  constructor(private PersonalWikiService:PersonalWikiService) { }

  ngOnInit() {
    this.getWikis()
  }
  getWikis(): void{
    this.PersonalWikiService.getWikis()
    .subscribe(PersonalWikis => this.PersonalWikis = PersonalWikis);
  }
  showcontent(content1){
    this.wikicontent=content1.content;
   }
  //  add(title:String,content:String): void {
  //   content= content.trim();
  //   title= title.trim();
  //   this.PersonalWikiService.addWiki2(title,content)
  //     .subscribe(adders => {
  //       alert("添加成功!");
  //       this.getWikis();
  //       $('#addfrom')[0].reset();   
        
  //     });
  // }

  add(){
    this.personalWiki.title=$("#title").val();
    this.personalWiki.content=$("#content").val();
    this.PersonalWikiService.addWiki(this.personalWiki)
      .subscribe(adders => {
        alert("添加成功!");
        this.getWikis();
        $('#addfrom')[0].reset();   
        
      });
  }
}
