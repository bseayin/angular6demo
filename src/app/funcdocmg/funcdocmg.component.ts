import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-funcdocmg',
  templateUrl: './funcdocmg.component.html',
  styleUrls: ['./funcdocmg.component.css']
})
export class FuncdocmgComponent implements OnInit {
  private funcpoints:Array<funcpoint>;
  constructor() { }
  isUpdateTR=1;


  ngOnInit() {
    this.funcpoints=[
      new funcpoint("一","功能点1","已编辑"),
      new funcpoint("一","功能点2","未编辑"),
      new funcpoint("二","功能点3","已编辑"),
    ]
    $("img.upload").each(function(){
      $(this).click(function(){
        console.log(this);
        var a=$(this).attr("id");
        console.log(a);
        $("#"+a+"uploadbtn").click();
        let imgFile = $("#"+a+"form")[0].files[0];
        let imgFile2= document.getElementById(a+'form');
        console.log(imgFile);
				var fr = new FileReader();
				fr.onload = function() {
					document.getElementById('preview').getElementsByTagName('img')[0].src = fr.result;
				};
				// fr.readAsDataURL(imgFile);
      });
    });
  }
  

}
export class funcpoint{
  constructor(
    public name:String,
    public module:String,
    public node:String
  ){}

}