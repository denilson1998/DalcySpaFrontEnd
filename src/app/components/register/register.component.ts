import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  ci: any;
  name: any;
  lastname: any;
  telephoneNumber: any;
  email: any;
  password: any;
  constructor(private router: Router, private loginService: LoginService) {}

  registerClient() {
    let userClient = {
      ci: this.ci,
      nombre: this.name,
      usuario: this.email,
      apellido: this.lastname,
      telefono: this.telephoneNumber,
      password: this.password,
    };
    this.loginService.registerC(userClient).subscribe(
      (res: any) => {
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1550);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  redirect() {}
}
