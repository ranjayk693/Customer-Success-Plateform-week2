import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';



@NgModule({
  declarations: [
    LoginComponent,
    ClientDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ClientDashboardComponent,
  ]
})
export class ClientModule { }
