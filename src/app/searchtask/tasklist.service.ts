import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Task } from './task' 
import { HttpErrorHandlerService, HandleError } from '../http-error-handler.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json;charset=UTF-8',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  TaskUrl = 'codebuilder/getAllTask';  // URL to web api
  addtaskUrl = 'codebuilder/addtaskzw2';  // URL to web api
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('FuncPointesService');
  }


  /** GET FuncPointes from the server */
  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(this.TaskUrl)
      .pipe(
        catchError(this.handleError('getTasks', []))
      );
  }  
  getTasksByStatus (status): Observable<Task[]> {
    return this.http.get<Task[]>(`codebuilder/selectTaskByStatus/${status}`)
      .pipe(
        catchError(this.handleError('getTasks', []))
      );
  }

  /* GET FuncPointes whose name contains search term */
  searchFuncPointes(term: string): Observable<Task[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Task[]>(this.TaskUrl, options)
      .pipe(
        catchError(this.handleError<Task[]>('searchFuncPointes', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new FuncPoint to the database */
  addtask (Task: Task): Observable<Task> {
    return this.http.post<Task>(this.addtaskUrl, Task, httpOptions)
      .pipe(
        catchError(this.handleError('addtask', Task))
      );
  }
  addtask2(title: String,demand:String,pId:number,uId:number,startTime:Date,endTime:Date): Observable<Task> {
    const url = `${this.addtaskUrl}/${title}/${demand}/${pId}/${uId}/${startTime}/${endTime}`; // DELETE api/SprintPlanes/42
    return this.http.post<Task>(url, httpOptions)
      .pipe(
        catchError(this.handleError('addtask2'))
      );
  }
  /** DELETE: delete the FuncPoint from the server */
  deleteFuncPoint (id: number): Observable<{}> {
    const url = `${this.TaskUrl}/${id}`; // DELETE api/FuncPointes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteFuncPoint'))
      );
  }

  /** PUT: update the FuncPoint on the server. Returns the updated FuncPoint upon success. */
  updateFuncPoint (FuncPoint: Task): Observable<Task> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Task>(this.TaskUrl, FuncPoint, httpOptions)
      .pipe(
        catchError(this.handleError('updateFuncPoint', FuncPoint))
      );
  }
}
