import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Member } from './member' 
import { HttpErrorHandlerService, HandleError } from '../http-error-handler.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MemberlistService {
  MemberUrl = 'codebuilder/getAllMember';  // URL to web api
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('FuncPointesService');
  }


  /** GET FuncPointes from the server */
  getMembers (): Observable<Member[]> {
    return this.http.get<Member[]>(this.MemberUrl)
      .pipe(
        catchError(this.handleError('getMembers', []))
      );
  }
  invateMembers (): Observable<Member[]> {
    return this.http.get<Member[]>('codebuilder/invateMember')
      .pipe(
        catchError(this.handleError('invateMember', []))
      );
  }
  deleteMember (id: number): Observable<{}> {
    const url = `codebuilder/deleteMember/${id}`; // DELETE api/FuncPointes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteFuncPoint'))
      );
  }
  updateMember (member: Member): Observable<any> {
    return this.http.put(`codebuilder/updateMember`, member, httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }
  insertMember (id:number): Observable<any> {
    return this.http.put(`codebuilder/insertMember/${id}`, id, httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

}
