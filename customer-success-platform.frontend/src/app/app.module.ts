import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectResourcesComponent } from './resources/project-resources/project-resources.component';
import { ClientMeetingComponent } from './Compuents/client-meeting/client-meeting.component';
import { MeetingProjectManagerComponent } from './Compuents/meeting-project-manager/meeting-project-manager.component';
import { ClientFeedbackComponent } from './Compuents/client-feedback/client-feedback.component';
import { ClientDashboardComponent } from './Compuents/client-dashboard/client-dashboard.component';
import { AdminDashboardComponent } from './Compuents/admin-dashboard/admin-dashboard.component';
import { ProjectUpdatesComponent } from './Compuents/project-updates/project-updates.component';
import { CreateProjectComponent } from './Compuents/create-project/create-project.component';
import { ProjectListComponent } from './Compuents/project-list/project-list.component';
import { AuditorDashboardComponent } from './Compuents/auditor-dashboard/auditor-dashboard.component';
import { ProjectManagerDashboardComponent } from './Compuents/project-manager-dashboard/project-manager-dashboard.component';
import { LoginPageComponent } from './Compuents/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectResourcesComponent,
    ClientMeetingComponent,
    MeetingProjectManagerComponent,
    ClientFeedbackComponent,
    ClientDashboardComponent,
    AdminDashboardComponent,
    ProjectUpdatesComponent,
    CreateProjectComponent,
    ProjectListComponent,
    AuditorDashboardComponent,
    ProjectManagerDashboardComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
