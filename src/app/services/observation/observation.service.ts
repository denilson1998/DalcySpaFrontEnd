import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { RequestService } from '../request.service';
import { ObservationPost } from 'src/app/shared/interfaces/observation_post.interface';

@Injectable({
  providedIn: 'root',
})
export class ObservationService {
  constructor(
    public _http: HttpClient,
    private _requestService: RequestService = new RequestService(_http)
  ) {}

  postObservation(observation: ObservationPost): Observable<any> {
    return this._requestService.post('observation', observation);
  }

  getObservations(id: number): Observable<any> {
    return this._requestService.get(`observations/${id}`);
  }
}
