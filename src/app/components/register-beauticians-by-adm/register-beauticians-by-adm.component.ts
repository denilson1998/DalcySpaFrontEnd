import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-register-beauticians-by-adm',
  templateUrl: './register-beauticians-by-adm.component.html',
  styleUrls: ['./register-beauticians-by-adm.component.css'],
})
export class RegisterBeauticiansByAdmComponent {
  name: any;
  lastname: any;
  ci: any;
  telephoneNumber: any;
  email: any;
  password: any;
  constructor(private loginService: LoginService) {}

  registerBeautician() {
    let beautician = {
      ci: this.ci,
      nombre: this.name,
      usuario: this.email,
      apellido: this.lastname,
      telefono: this.telephoneNumber,
      password: this.password,
    };
    this.loginService.registerE(beautician).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Esteticista Registrado con Exito!',
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2200);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
