import { Injectable } from '@angular/core';
import { RequestService } from '../request.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryPost } from 'src/app/shared/interfaces/category_post.interface';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(
    public _http: HttpClient,
    private _requestService: RequestService = new RequestService(_http)
  ) {}

  getCategories(): Observable<any> {
    return this._requestService.get('getCategories');
  }

  postCategory(data: CategoryPost): Observable<any> {
    return this._requestService.post('postCategory', data);
  }

  postService(data: any): Observable<any> {
    return this._requestService.post('postService', data);
  }
  getServices(category: any): Observable<any> {
    return this._requestService.post('getServicesByCategory', category);
  }
  getTurnOfaService(service: any): Observable<any> {
    return this._requestService.get(`turnsOfService/${service}`);
  }
  getBeauticians(): Observable<any> {
    return this._requestService.get('getEsteticistas');
  }
}
