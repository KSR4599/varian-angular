import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getBlogFeed(lang:string) {
    return this.http.get(this.rootURL + '/getBlogFeed' + '?lang='+lang);
  }

}
