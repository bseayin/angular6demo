import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorHandlerService, HandleError } from '../http-error-handler.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './user';
import { registerLocaleData } from '@angular/common';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private handleError: HandleError;
  loginurl = 'codebuilder/login'; 
  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {this.handleError = httpErrorHandler.createHandleError('LoginService'); }

//登录
login(name:String,pwd:String): Observable<User>{
  const url=`${this.loginurl}/?name=${name}&&pwd=${pwd}`;
  return this.http.post<User>(url,httpOptions)
  .pipe(
    catchError(this.handleError('login'))
  );
}


  }





