import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    public _http: HttpClient,
    private _requestService: RequestService = new RequestService(_http)
  ) {}

  registerC(userClient: any): Observable<any> {
    return this._requestService.post('postUserC', userClient);
  }
  registerE(beautician: any): Observable<any> {
    return this._requestService.post('postUserE', beautician);
  }
  login(user: any): Observable<any> {
    return this._requestService.post('login', user);
  }
}
