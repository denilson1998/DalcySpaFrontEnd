import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(
    public _http: HttpClient,
    private _requestService: RequestService = new RequestService(_http)
  ) {}

  postAppointment(appointment: any): Observable<any> {
    return this._requestService.post('appointment', appointment);
  }

  getAppointmentsByUser(): Observable<any> {
    return this._requestService.get('appointmentsByUser');
  }
  getAppointmentsByBeautician(): Observable<any> {
    return this._requestService.get('appointmentsByEsteticista');
  }
}
