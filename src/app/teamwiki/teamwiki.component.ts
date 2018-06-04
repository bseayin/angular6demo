import { Component, OnInit } from '@angular/core';
import { TeamwikiService } from './teamwiki.service';
import { Wiki } from './wiki' 
@Component({
  selector: 'app-teamwiki',
  templateUrl: './teamwiki.component.html',
  providers: [ TeamwikiService ],
  styleUrls: ['./teamwiki.component.css']
})
export class TeamwikiComponent implements OnInit {
  wikis:Wiki[];
  constructor(private TeamwikiService:TeamwikiService) { }
  isUpdateTR=1; 
  ngOnInit() {
    this.getWiki()
  }
  getWiki(): void{
    this.TeamwikiService.getWiki()
    .subscribe(wikis => this.wikis = wikis);
  }
}
