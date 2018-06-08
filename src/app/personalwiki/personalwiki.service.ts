import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PersonalWiki } from './personalWiki' 
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
export class PersonalWikiService {
  WikiUrl = 'codebuilder/showpersonalwikizw';  // URL to web api
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('PersonalWikiService');
  }


  /** GET Wikies from the server */
  getWikis (): Observable<PersonalWiki[]> {
    console.log("asd");
    return this.http.get<PersonalWiki[]>(this.WikiUrl)
      .pipe(
        catchError(this.handleError('getWikis', []))
      );
  }

  /* GET Wikies whose name contains search term */
  searchWikies(term: string): Observable<PersonalWiki[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<PersonalWiki[]>(this.WikiUrl, options)
      .pipe(
        catchError(this.handleError<PersonalWiki[]>('searchWikies', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new Wiki to the database */
  addWiki (PersonalWiki: PersonalWiki): Observable<PersonalWiki> {
    return this.http.post<PersonalWiki>(this.WikiUrl, PersonalWiki, httpOptions)
      .pipe(
        catchError(this.handleError('addWiki', PersonalWiki))
      );
  }

  /** DELETE: delete the Wiki from the server */
  deleteWiki (id: number): Observable<{}> {
    const url = `${this.WikiUrl}/${id}`; // DELETE api/Wikies/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteWiki'))
      );
  }

  /** PUT: update the Wiki on the server. Returns the updated Wiki upon success. */
  updateWiki (PersonalWiki: PersonalWiki): Observable<PersonalWiki> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<PersonalWiki>(this.WikiUrl, PersonalWiki, httpOptions)
      .pipe(
        catchError(this.handleError('updateWiki', PersonalWiki))
      );
  }
}
