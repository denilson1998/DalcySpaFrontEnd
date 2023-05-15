import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { GetAppointmentsComponent } from './components/get-appointments/get-appointments.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterBeauticiansByAdmComponent } from './components/register-beauticians-by-adm/register-beauticians-by-adm.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { DatepickerModule } from 'ng2-datepicker';
import { GetAppointmentsForBeauticianComponent } from './components/get-appointments-for-beautician/get-appointments-for-beautician.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CreateCategoryComponent,
    LoginComponent,
    GetAppointmentsComponent,
    RegisterComponent,
    RegisterBeauticiansByAdmComponent,
    CreateServiceComponent,
    AppointmentComponent,
    GetAppointmentsForBeauticianComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
