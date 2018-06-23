import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private Registerservice :RegisterService) { }

  ngOnInit() {
  }
register() :void{
  var name=$("#namere").val();
    var pwd=$("#pwdre").val();
    this.Registerservice.register(name,pwd).subscribe(user =>{
      if(user.rs=="Y"){
        this.router.navigate(['login']);
      }else if(user.rs=="A"){
        alert(user.reason);
      }else if(user.rs=="N"){
        alert(user.reason);
      }
          })
}
}
