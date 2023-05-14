import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent {
  description: any;
  constructor(private _serviceService: ServicesService) {}

  saveCategory() {
    let category = {
      nombre: this.description,
    };
    this._serviceService.postCategory(category).subscribe((res: any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Categoria Registrada!',
        showConfirmButton: false,
        timer: 2000,
      });
    });
  }
}
