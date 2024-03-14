import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Compuents/login-page/login-page.component';
import { AdminDashboardComponent } from './Compuents/admin-dashboard/admin-dashboard.component';
import { AuditorDashboardComponent } from './Compuents/auditor-dashboard/auditor-dashboard.component';
import { ProjectManagerDashboardComponent } from './Compuents/project-manager-dashboard/project-manager-dashboard.component';
import { ClientDashboardComponent } from './Compuents/client-dashboard/client-dashboard.component';
import { AuthModule } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'auditor', component: AuditorDashboardComponent },
  { path: 'manager', component: ProjectManagerDashboardComponent },
  { path: 'client', component: ClientDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
