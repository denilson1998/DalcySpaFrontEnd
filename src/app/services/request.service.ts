import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private headers: HttpHeaders;
  private url: string = 'http://localhost:3000/api/';

  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders();
  }

  get(prefixUrl: string): Observable<any> {
    this.setHeaders();
    return this._http.get(this.url + prefixUrl, { headers: this.headers });
  }

  post(prefixUrl: string, params: any = null): Observable<any> {
    this.setHeaders();
    return this._http.post(this.url + prefixUrl, params, {
      headers: this.headers,
    });
  }

  setHeaders() {
    this.headers = new HttpHeaders()
      .set('Content-Accept', 'application/json')
      .set('X-Requested-With', 'XMLHttpRequest')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/pdf')
      .set('Authorization', sessionStorage.getItem('token') ?? '');
  }
}
