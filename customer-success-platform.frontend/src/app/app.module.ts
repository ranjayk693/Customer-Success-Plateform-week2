import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientMeetingComponent } from './Compuents/client-meeting/client-meeting.component';
import { MeetingProjectManagerComponent } from './Compuents/meeting-project-manager/meeting-project-manager.component';
import { ClientFeedbackComponent } from './Compuents/client-feedback/client-feedback.component';
import { ClientDashboardComponent } from './Compuents/client-dashboard/client-dashboard.component';
import { AdminDashboardComponent } from './Compuents/admin-dashboard/admin-dashboard.component';
import { CreateProjectComponent } from './Compuents/create-project/create-project.component';
import { ProjectListComponent } from './Compuents/project-list/project-list.component';
import { AuditorDashboardComponent } from './Compuents/auditor-dashboard/auditor-dashboard.component';
import { ProjectManagerDashboardComponent } from './Compuents/project-manager-dashboard/project-manager-dashboard.component';
import { LoginPageComponent } from './Compuents/login-page/login-page.component';
import { ShowUpdateComponent } from './Compuents/show-update/show-update.component';
import { ShowClientFeedbackComponent } from './Compuents/show-client-feedback/show-client-feedback.component';
import { ShowOneClientFeedbackComponent } from './Compuents/show-one-client-feedback/show-one-client-feedback.component';
import { ProjectUpdatesComponent } from './Compuents/project-updates/project-updates.component';
import { ApprovalTeamComponent } from './Compuents/approval-team/approval-team.component';
import { ResourcesDataComponent } from './Compuents/resources-data/resources-data.component';

@NgModule({
  declarations: [
    AppComponent,

    ClientMeetingComponent,
    MeetingProjectManagerComponent,
    ClientFeedbackComponent,
    ClientDashboardComponent,
    AdminDashboardComponent,
    CreateProjectComponent,
    ProjectListComponent,
    AuditorDashboardComponent,
    ProjectManagerDashboardComponent,
    LoginPageComponent,
    ShowUpdateComponent,
    ShowClientFeedbackComponent,
    ShowOneClientFeedbackComponent,
    ProjectUpdatesComponent,

    ApprovalTeamComponent,
     ResourcesDataComponent,
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
