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
  addprojectUrl='codebuilder/addprojectzw';  // URL to web api
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('BasicsetService');
  }
    /** POST: add a new SprintPlan to the database */
    addProject(Project: Project): Observable<Project> {
      return this.http.post<Project>(this.addprojectUrl, Project, httpOptions)
        .pipe(
          catchError(this.handleError('addproject', Project))
        );
    }
}
