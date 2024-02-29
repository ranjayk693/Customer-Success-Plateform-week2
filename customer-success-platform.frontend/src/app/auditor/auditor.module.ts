import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuditorDashboardComponent } from './auditor-dashboard/auditor-dashboard.component';



@NgModule({
  declarations: [
    LoginComponent,
    AuditorDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuditorModule { }
