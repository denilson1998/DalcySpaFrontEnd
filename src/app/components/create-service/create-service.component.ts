import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services/services.service';
import { Category } from 'src/app/shared/interfaces/category.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css'],
})
export class CreateServiceComponent implements OnInit {
  description: any;
  categories: Category[];
  category: Category['id'];

  constructor(private _serviceService: ServicesService) {
    this.categories = [];
    this.category = 0;
  }

  ngOnInit(): void {
    this.getCategories();
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

  saveService() {
    let service = {
      descripcion: this.description,
      id_categoria: this.category,
    };
    this._serviceService.postService(service).subscribe((res: any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Servicio Registrado!',
        showConfirmButton: false,
        timer: 2000,
      });
    });
  }
}
