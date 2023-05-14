import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import Swal from 'sweetalert2';

import { Utils } from 'src/app/shared/Utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: any;
  password: any;
  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    let user = {
      usuario: this.email,
      password: this.password,
    };
    this.loginService.login(user).subscribe(
      (res: any) => {
        console.log(res);
        Utils.set('token', res.token);
        Utils.set('rolId', res.logged.id_rol);
        Utils.set('nameRol', res.logged.nombre_rol);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario Logeado con Exito!',
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2100);
      },
      (error: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.msg,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
  redirect() {
    this.router.navigate(['/register']);
  }
}
