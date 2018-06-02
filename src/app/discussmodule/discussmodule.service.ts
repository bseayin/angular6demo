import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TaskConfirm } from './taskconfirm' 
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
export class DiscussmoduleService {
  taskconfirmUrl = 'codebuilder/showalltaskconfirmzw';  // URL to web api
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('DiscussmoduleService');
  }


  /** GET SprintPlanes from the server */
  getTaskConfirms (): Observable<TaskConfirm[]> {
    console.log("TaskConfirm");
    return this.http.get<TaskConfirm[]>(this.taskconfirmUrl)
      .pipe(
        catchError(this.handleError('getTaskConfirms', []))
      );
  }

  /* GET SprintPlanes whose name contains search term */
  searchTaskConfirms(term: string): Observable<TaskConfirm[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<TaskConfirm[]>(this.taskconfirmUrl, options)
      .pipe(
        catchError(this.handleError<TaskConfirm[]>('searchTaskConfirms', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new SprintPlan to the database */
  addTaskConfirms(TaskConfirm: TaskConfirm): Observable<TaskConfirm> {
    return this.http.post<TaskConfirm>(this.taskconfirmUrl, TaskConfirm, httpOptions)
      .pipe(
        catchError(this.handleError('addTaskConfirm', TaskConfirm))
      );
  }

  /** DELETE: delete the SprintPlan from the server */
  deleteTaskConfirms (id: number): Observable<{}> {
    const url = `${this.taskconfirmUrl}/${id}`; // DELETE api/SprintPlanes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteTaskConfirms'))
      );
  }

  /** PUT: update the SprintPlan on the server. Returns the updated SprintPlan upon success. */
  updateTaskConfirms (TaskConfirm: TaskConfirm): Observable<TaskConfirm> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<TaskConfirm>(this.taskconfirmUrl, TaskConfirm, httpOptions)
      .pipe(
        catchError(this.handleError('updateSprintPlan', TaskConfirm))
      );
  }
}
