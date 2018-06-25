import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Statusdata} from './stautsdata';
import {IndexmoduleComponent} from './indexmodule.component';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Project } from './project' 
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
export class StatusdataService {
  getUserProjectUrl='codebuilder/getUserProjectZW';
  sendProjectUrl='codebuilder/setprojectsessionZW';
  TaskUrl = 'codebuilder/getAllTask';  // URL to web api
  addtaskUrl = 'codebuilder/addtaskzw2';  // URL to web api
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('FuncPointesService');
  }


   getTasksByStatus (): Observable<Statusdata> {
    
    return this.http.get<Statusdata>(`codebuilder/getStatusNumbers`)
      .pipe(
        catchError(this.handleError('getTasks'))
      );
      

  }
    /** GET Wikies from the server */
    getUserProjects (): Observable<Project[]> {
      console.log("得到用户的所属项目");
      return this.http.get<Project[]>(this.getUserProjectUrl)
        .pipe(
          catchError(this.handleError('getUserProjects', []))
        );
}
    sendprojectsession(name: String): Observable<Project> {
      const url = `${this.sendProjectUrl}/${name}`; // DELETE api/SprintPlanes/42
      return this.http.post<Project>(url, httpOptions)
        .pipe(
          catchError(this.handleError('sendprojectsession'))
        );
    }
}
