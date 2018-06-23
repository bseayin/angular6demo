import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorHandlerService, HandleError } from '../http-error-handler.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '.././login/user';
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
export class RegisterService {
  private handleError: HandleError;
 registerurl = 'codebuilder/register'; 
  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) { this.handleError = httpErrorHandler.createHandleError('RegisterService');}

    register(name:String,pwd:String): Observable<User>{
      const url=`${this.registerurl}/?name=${name}&&pwd=${pwd}`;
      return this.http.post<User>(url,httpOptions)
      .pipe(
        catchError(this.handleError('register'))
      );
    }

  }
