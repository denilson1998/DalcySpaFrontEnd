import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utils } from 'src/app/shared/Utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  hiddenForAdm: boolean;
  hiddenForClient: boolean;
  hiddeForBeautician: boolean;
  constructor(private router: Router) {
    this.hiddenForAdm = false;
    this.hiddenForClient = false;
    this.hiddeForBeautician = false;
  }

  ngOnInit(): void {
    this.permitions();
  }

  logout() {
    Utils.deleteAll();
    sessionStorage.clear();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Sesión Cerrada con Exito!',
      showConfirmButton: false,
      timer: 2000,
    });
    setTimeout(() => {
      //this.router.navigate(["/login"]);
    }, 2500);
  }

  permitions() {
    const rolId = +Utils.get('rolId')!;
    const nameRol = Utils.get('nameRol')!;

    if (rolId == 1 && nameRol == 'admin') {
      this.hiddenForAdm = false;
      this.hiddenForClient = true;
      this.hiddeForBeautician = true;
    }
  }
}
