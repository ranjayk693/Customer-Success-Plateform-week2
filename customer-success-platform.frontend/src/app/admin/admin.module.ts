import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    LoginComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,AdminDashboardComponent
  ]
})
export class AdminModule { }
