import { Component, OnInit } from '@angular/core';
import { TeamWikiService } from './teamwiki.service';
import { Wiki } from './wiki' 
@Component({
  selector: 'app-teamwiki',
  templateUrl: './teamwiki.component.html',
  providers: [ TeamWikiService ],
  styleUrls: ['./teamwiki.component.css']
})
export class TeamwikiComponent implements OnInit {
  wikis:Wiki[];
  constructor(private TeamWikiService:TeamWikiService) { }
  isUpdateTR=1; 
  ngOnInit() {
    this.getWikis()
  }
  getWikis(): void{
    this.TeamWikiService.getWikis()
    .subscribe(wikis => this.wikis = wikis);
  }
}
