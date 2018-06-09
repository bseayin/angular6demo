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
   MessageUrl='codebuilder/FuncAllPointDJW';
  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {this.handleError = httpErrorHandler.createHandleError('FuncPointesService'); }

  getAllMessages(): Observable<Message[]>{
const url=`${this.MessageUrl}`;
return this.http.get<Message[]>(url,httpOptions)
.pipe(
  catchError(this.handleError('addFuncPoint'))
);
  }

 
}
