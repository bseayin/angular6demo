import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }
  configUrl = 'assets/config.json';

getConfig() {
  return this.http.get(this.configUrl);
}
}
