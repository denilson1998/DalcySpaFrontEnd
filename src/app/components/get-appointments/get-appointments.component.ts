import { Component, OnInit } from '@angular/core';

import { AppointmentService } from '../../services/appointment/appointment.service';

import * as moment from 'moment';
import { ObservationService } from '../../services/observation/observation.service';
import { Appointment } from 'src/app/shared/interfaces/appointment.interface';
import { ObservationGet } from '../../shared/interfaces/observation_get.interface';
@Component({
  selector: 'app-get-appointments',
  templateUrl: './get-appointments.component.html',
  styleUrls: ['./get-appointments.component.css'],
})
export class GetAppointmentsComponent implements OnInit {
  appointments: Appointment[];
  observations: ObservationGet[];
  constructor(
    private getAppointments: AppointmentService,
    private observationService: ObservationService
  ) {
    this.appointments = [];
    this.observations = [];
  }

  ngOnInit(): void {
    this.getAppointmentsByUser();
  }

  getAppointmentsByUser() {
    this.getAppointments.getAppointmentsByUser().subscribe(
      (res: any) => {
        this.appointments = res.body.appointments;
        console.log(this.appointments);
        this.formatedDates(this.appointments);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  formatedDates(dates: any) {
    for (let i = 0; i < dates.length; i++) {
      let dateFormated = moment(dates[i].fecha).format('DD/MM/YYYY');
      this.appointments[i].fecha = dateFormated;
    }
  }

  getObservations(id: number) {
    let id_cita = id;

    this.observationService.getObservations(id_cita).subscribe(
      (res: any) => {
        this.observations = res.body.observations;
        console.log(this.observations);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
