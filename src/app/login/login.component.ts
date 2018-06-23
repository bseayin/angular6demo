import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private Loginservice :LoginService) { }

  ngOnInit() {
  }

  login(): void{
    var name=$("#email").val();
    var pwd=$("#pwd").val();
    console.log(name);
    console.log(pwd);
    this.Loginservice.login(name,pwd).subscribe(user =>{
if(user.rs=="Y"){
  this.router.navigate(['rootapp']);
}else if(user.rs=="N"){
  alert(user.reason);
}
    })
    

  };

  back(): void{
    this.router.navigate(['register']);
  }
  }


