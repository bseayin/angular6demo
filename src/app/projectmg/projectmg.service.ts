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
  FuncPointesUrl4= 'codebuilder/getResumeid';//向后台传输完成对应功能点的人的简历的id
  ProjectUrl = 'codebuilder/getProjectPropertiesAnays?title=title1';
  ProjectUrl2= 'codebuilder/updateProjectPropertiesAnays';
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('FuncPointesService');
  }
  /**根据关键词遍历简历 */
  getResumeByKey (key1: String,key2:String,key3:String): Observable<Resume[]> {
    const url = `${this.FuncPointesUrl2}?p1=${key1}&&p2=${key2}&&p3=${key3}`; 
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

  /**将功能点指定给某个人完成，向后台传简历id组成的字符串，格式id1，id2，id3 还想后台传送需要人数，开始结束时间和功能点title*/
postResumeid(rid:String,personnumber:number,startTime:Date,endTime:Date,fid:number,sumDay:number,projecttitle:String) : Observable<{}>{
  const url = `${this.FuncPointesUrl4}/${rid}/${personnumber}/${startTime}/${endTime}/${fid}/${sumDay}/${projecttitle}`;  
    return this.http.post(url, httpOptions)
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
  getProjectProperties (): Observable<Project[]>{
    return this.http.get<Project[]>(this.ProjectUrl)
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
