import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Project } from './project' 
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
export class BasicsetService {
  addprojectUrl='codebuilder/createProjectDJW';  // URL to web api
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('BasicsetService');
  }
    /** POST: add a new SprintPlan to the database */
    addProject(title: String): Observable<{}> {
      const url=`${this.addprojectUrl}/${title}`;
      return this.http.post<Project>(url, httpOptions)
        .pipe(
          catchError(this.handleError('addproject'))
        );
    }
    
}
