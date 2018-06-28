import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Team } from './team' 
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
export class TaskService {
  getUserTeamURL='codebuilder/getTeamZW';
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('TaskService');
  }

   /** GET Wikies from the server */
   getUserTeam (): Observable<Team[]> {
    console.log("得到用户的所属项目");
    return this.http.get<Team[]>(this.getUserTeamURL)
      .pipe(
        catchError(this.handleError('getUserTeam', []))
      );
}
}
