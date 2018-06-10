import { Injectable } from '@angular/core';
import { Message } from './message';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorHandlerService, HandleError } from '../http-error-handler.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PersonalsettingService {
  private handleError: HandleError;
   MessageUrl='codebuilder/getAllMessageDJW';
   MessageUrl2='codebuilder/agreeMessageDJW';
   MessageUrl3='codebuilder/disagreeMessageDJW';
  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {this.handleError = httpErrorHandler.createHandleError('FuncPointesService'); }
//显示所有当前用户信息
  getAllMessages(): Observable<Message[]>{
const url=`${this.MessageUrl}`;
return this.http.get<Message[]>(url,httpOptions)
.pipe(
  catchError(this.handleError('addFuncPoint'))
);
  }
  //同意加入团队
agreeDJW(message:Message): Observable<Message>{
  const url=`${this.MessageUrl2}`;
  return this.http.post<Message>(url, message,httpOptions)
  .pipe(
    catchError(this.handleError('addFuncPoint'))
  );
}
//不同意加入团队
disagreeDJW(message:Message): Observable<{}>{
  const url=`${this.MessageUrl3}`;
  return this.http.post(url, message,httpOptions)
  .pipe(
    catchError(this.handleError('addFuncPoint'))
  );
}
}
