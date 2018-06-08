import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { FuncPoint } from './funcPoint'
import { Resume } from './resume'
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
export class ProjectmgService {
  FuncPointesUrl = 'codebuilder/FuncAllPointDJW';  // URL to web api
  FuncPointesUrl2= 'codebuilder/resumeRetrieval';//根据关键词遍历简历
  FuncPointesUrl3= 'codebuilder/selectResumeBySearchWord';//根据搜索框人名遍历简历
  ProjectUrl = 'codebuilder/getProjectPropertiesAnays';
  ProjectUrl2= 'codebuilder/updateProjectPropertiesAnays';
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('FuncPointesService');
  }
  /**根据关键词遍历简历 */
  getResumeByKey (key1: String,key2:String,key3:String): Observable<Resume[]> {
    const url = `${this.FuncPointesUrl2}/${key1}/${key2}/${key3}`; 
    return this.http.post<Resume[]>(url,  httpOptions)
      .pipe(
        catchError(this.handleError('addFuncPoint'))
      );
  }
  /**用搜索框内的关键字获得简历对象 */
  getResumeBySearchKey(key:String): Observable<Resume[]>{
    const url=`${this.FuncPointesUrl3}/${key}`;
    return this.http.post<Resume[]>(url, httpOptions)
    .pipe(
      catchError(this.handleError('addFuncPoint'))
    );
  }

  /** GET FuncPointes from the server */
  getFuncPointes (): Observable<FuncPoint[]> {
    return this.http.get<FuncPoint[]>(this.FuncPointesUrl)
      .pipe(
        catchError(this.handleError('getFuncPointes', []))
      );
  }
  /** Update Properties of the owner's project */
  updateProjectProperties (title:String,period:number,level:number,pulse: number):Observable<Project[]>{
    const url = `${this.ProjectUrl2}/${title}/${period}/${level}/${pulse}`;
    console.log("update start");
    return this.http.post<Project[]>(url,httpOptions)
      .pipe(
        catchError(this.handleError('updateProjectProperties'))
      );
  }
  /** Get Properties of the owner's project */
  getProjectProperties (title:String): Observable<Project[]>{
    const url = `${this.ProjectUrl}?title=${title}`;
    return this.http.get<Project[]>(url,httpOptions)
    .pipe(
      catchError(this.handleError('getProjects',[]))
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
