import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, ClientDashboardComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ClientDashboardComponent],
})
export class ClientModule {}
