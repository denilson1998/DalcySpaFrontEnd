import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GetAppointmentsComponent } from './components/get-appointments/get-appointments.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterBeauticiansByAdmComponent } from './components/register-beauticians-by-adm/register-beauticians-by-adm.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { AppointmentComponent } from './components/appointment/appointment.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'getAppointments', component: GetAppointmentsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'registerBeauticians', component: RegisterBeauticiansByAdmComponent },
  { path: 'createCategory', component: CreateCategoryComponent },
  { path: 'createService', component: CreateServiceComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
