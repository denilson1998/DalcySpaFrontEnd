import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { AppointmentService } from '../../services/appointment/appointment.service';
import { ObservationService } from '../../services/observation/observation.service';
import { Appointment } from 'src/app/shared/interfaces/appointment.interface';

@Component({
  selector: 'app-get-appointments-for-beautician',
  templateUrl: './get-appointments-for-beautician.component.html',
  styleUrls: ['./get-appointments-for-beautician.component.css'],
})
export class GetAppointmentsForBeauticianComponent implements OnInit {
  appointments: Appointment[];
  description: string;
  diagnostic: string;
  appointmentId: number;
  constructor(
    private appointmentService: AppointmentService,
    private observationService: ObservationService
  ) {
    this.appointments = [];
    this.appointmentId = 0;
    this.description = '';
    this.diagnostic = '';
  }

  ngOnInit(): void {
    this.getAppointmentsForBeautician();
  }
  getAppointmentsForBeautician() {
    this.appointmentService.getAppointmentsByBeautician().subscribe(
      (res: any) => {
        this.appointments = res.body.appointments;
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
  getAppointmentId(id: any) {
    this.appointmentId = id;
    console.log(this.appointmentId);
  }

  postObs() {
    let obs = {
      descripcion: this.description,
      diagnostico: this.diagnostic,
      id_cita: this.appointmentId,
    };
    this.observationService.postObservation(obs).subscribe(
      (res: any) => {
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2100);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
