import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SprintPlan } from './sprintplan' 
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
export class TeamfilesService {
  SprintPlanUrl = 'codebuilder/showsprintplanzw';  // URL to web api
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('TeamfilesService');
  }


  /** GET SprintPlanes from the server */
  getSprintPlans (): Observable<SprintPlan[]> {
    console.log("asd");
    return this.http.get<SprintPlan[]>(this.SprintPlanUrl)
      .pipe(
        catchError(this.handleError('getSprintPlans', []))
      );
  }

  /* GET SprintPlanes whose name contains search term */
  searchSprintPlanes(term: string): Observable<SprintPlan[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<SprintPlan[]>(this.SprintPlanUrl, options)
      .pipe(
        catchError(this.handleError<SprintPlan[]>('searchSprintPlanes', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new SprintPlan to the database */
  addSprintPlan (SprintPlan: SprintPlan): Observable<SprintPlan> {
    return this.http.post<SprintPlan>(this.SprintPlanUrl, SprintPlan, httpOptions)
      .pipe(
        catchError(this.handleError('addSprintPlan', SprintPlan))
      );
  }

  /** DELETE: delete the SprintPlan from the server */
  deleteSprintPlan (id: number): Observable<{}> {
    const url = `${this.SprintPlanUrl}/${id}`; // DELETE api/SprintPlanes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteSprintPlan'))
      );
  }

  /** PUT: update the SprintPlan on the server. Returns the updated SprintPlan upon success. */
  updateSprintPlan (SprintPlan: SprintPlan): Observable<SprintPlan> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<SprintPlan>(this.SprintPlanUrl, SprintPlan, httpOptions)
      .pipe(
        catchError(this.handleError('updateSprintPlan', SprintPlan))
      );
  }
}
