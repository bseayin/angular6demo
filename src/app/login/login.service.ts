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
Userurl:'codebuilder/agreeMessageDJW';
  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {this.handleError = httpErrorHandler.createHandleError('FuncPointesService'); }

//注册
register(user:User): Observable<User[]>{
  const url=`${this.Userurl}`;
  return this.http.get<User[]>(url,httpOptions)
  .pipe(
    catchError(this.handleError('addFuncPoint'))
  );
}

  }





