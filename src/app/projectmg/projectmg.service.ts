import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { FuncPoint } from './funcPoint' 
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
export class ProjectmgService {
  FuncPointesUrl = 'codebuilder/FuncAllPointDJW';  // URL to web api
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('FuncPointesService');
  }


  /** GET FuncPointes from the server */
  getFuncPointes (): Observable<FuncPoint[]> {
    return this.http.get<FuncPoint[]>(this.FuncPointesUrl)
      .pipe(
        catchError(this.handleError('getFuncPointes', []))
      );
  }

  /* GET FuncPointes whose name contains search term */
  searchFuncPointes(term: string): Observable<FuncPoint[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<FuncPoint[]>(this.FuncPointesUrl, options)
      .pipe(
        catchError(this.handleError<FuncPoint[]>('searchFuncPointes', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new FuncPoint to the database */
  addFuncPoint (FuncPoint: FuncPoint): Observable<FuncPoint> {
    return this.http.post<FuncPoint>(this.FuncPointesUrl, FuncPoint, httpOptions)
      .pipe(
        catchError(this.handleError('addFuncPoint', FuncPoint))
      );
  }

  /** DELETE: delete the FuncPoint from the server */
  deleteFuncPoint (id: number): Observable<{}> {
    const url = `${this.FuncPointesUrl}/${id}`; // DELETE api/FuncPointes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteFuncPoint'))
      );
  }

  /** PUT: update the FuncPoint on the server. Returns the updated FuncPoint upon success. */
  updateFuncPoint (FuncPoint: FuncPoint): Observable<FuncPoint> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<FuncPoint>(this.FuncPointesUrl, FuncPoint, httpOptions)
      .pipe(
        catchError(this.handleError('updateFuncPoint', FuncPoint))
      );
  }
}
