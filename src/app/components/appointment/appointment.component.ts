import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import { AppointmentService } from '../../services/appointment/appointment.service';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services/services.service';
import { Category } from 'src/app/shared/interfaces/category.interface';
import { Service } from 'src/app/shared/interfaces/service.interface';
import { Turn } from 'src/app/shared/interfaces/turn.interface';
import { Beautician } from 'src/app/shared/interfaces/beauticians.interface';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  description: any;

  date: any = new Date();

  categories: Category[];
  category: Category['id'];

  services: Service[];
  service: Service['id'];

  turns: Turn[];
  turn: Turn['id_turno'];

  beauticians: Beautician[];
  beautician: Beautician['id'];

  options: DatepickerOptions = {
    format: 'dd/MM/yyyy',
    //minYear: getYear(new Date()) - 30, // minimum available and selectable year
    //maxYear: getYear(new Date()) + 30,
    minDate: null,
    maxDate: null,
    formatDays: 'EEEEE',
    position: 'left',
    firstCalendarDay: 1, // 0 - Sunday, 1 - Monday,
    calendarClass: 'datepicker-default', // custom datepicker calendar CSS class to be applied
    scrollBarColor: '#dfe3e9', // in case you customize you theme, here you define scroll bar color
    inputClass: 'form-control text-center', // custom input CSS class to be applied
    //enableKeyboard: true  // enable keyboard events,
  };
  constructor(
    private _appointmentService: AppointmentService,
    private _serviceService: ServicesService,
    private router: Router
  ) {
    this.categories = [];
    this.category = 1;

    this.services = [];
    this.service = 1;

    this.turns = [];
    this.turn = 1;

    this.beauticians = [];
    this.beautician = 1;
  }

  ngOnInit(): void {
    this.getCategories();
    this.getServices();
    this.getTurnOfaService();
    this.getBeauticians();
  }
  getCategories() {
    this._serviceService.getCategories().subscribe(
      (res: any) => {
        this.categories = res.body.categorias;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  getServices() {
    let category = {
      id_categoria: this.category,
    };
    this._serviceService.getServices(category).subscribe(
      (res: any) => {
        this.services = res.body.services;
        this.service = this.services[0].id;
        this.getTurnOfaService();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  getTurnOfaService() {
    this._serviceService.getTurnOfaService(this.service).subscribe(
      (res: any) => {
        this.turns = res.body.turns;
        this.turn = this.turns[0].id_turno;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  getBeauticians() {
    this._serviceService.getBeauticians().subscribe(
      (res: any) => {
        this.beauticians = res.esteticistas;
        this.beautician = this.beauticians[0].id;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  saveAppointment() {
    let dateFormated = format(this.date, 'MM/dd/yyyy');
    let appointment = {
      descripcion: this.description,
      id_turno: this.turn,
      id_servicio: this.service,
      id_esteticista: this.beautician,
      fecha: dateFormated,
    };

    this._appointmentService.postAppointment(appointment).subscribe(
      (res: any) => {
        console.log(res);
        if (res.message.name == 'error') {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error Cita No Registrada!',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.message,
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            this.router.navigate(['/getAppointments']);
          }, 1600);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
