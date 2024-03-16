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
import { ViewResourcesComponent } from './Compuents/view-resources/view-resources.component';
import { ViewApproveTeamComponent } from './Compuents/view-approve-team/view-approve-team.component';
import { AuthModule } from '@auth0/auth0-angular';
import { ShowFeedbackComponent } from './Client/show-feedback/show-feedback.component';
import { ShowFeedbackManagerComponent } from './Manager/show-feedback-manager/show-feedback-manager.component';
import { ShowClientGeneralUpdateComponent } from './Client/show-client-general-update/show-client-general-update.component';
import { ManagerProjectUpdateComponent } from './Manager/manager-project-update/manager-project-update.component';
import { ProjectBudgetComponent } from './Compuents/project-budget/project-budget.component';
import { ProjetBudgetEditDeleteComponent } from './Compuents/projet-budget-edit-delete/projet-budget-edit-delete.component';
import { AddStakeholderComponent } from './Compuents/add-stakeholder/add-stakeholder.component';
import { EditDeleteStakeholderComponent } from './Compuents/edit-delete-stakeholder/edit-delete-stakeholder.component';
import { AddRiskProflingComponent } from './Compuents/add-risk-profling/add-risk-profling.component';
import { EditDeleteRiskProflingComponent } from './Compuents/edit-delete-risk-profling/edit-delete-risk-profling.component';
import { AddPhasesMilestoneComponent } from './Compuents/add-phases-milestone/add-phases-milestone.component';
import { EditDeletePhasesMilestoneComponent } from './Compuents/edit-delete-phases-milestone/edit-delete-phases-milestone.component';
import { AddSprintComponent } from './Compuents/add-sprint/add-sprint.component';
import { EditDeteteSprintComponent } from './Compuents/edit-detete-sprint/edit-detete-sprint.component';
import { AddAuditHistoryComponent } from './Compuents/add-audit-history/add-audit-history.component';
import { EditDeleteAuditHistoryComponent } from './Compuents/edit-delete-audit-history/edit-delete-audit-history.component';
import { AddVerionHistoryComponent } from './Compuents/add-verion-history/add-verion-history.component';
import { RoleBasedControlComponent } from './Compuents/role-based-control/role-based-control.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EditDeleteVersionHistoryComponent } from './Compuents/edit-delete-version-history/edit-delete-version-history.component';
import { EscalationMatrixComponent } from './Compuents/escalation-matrix/escalation-matrix.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

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
    ViewResourcesComponent,
    ViewApproveTeamComponent,
    ShowFeedbackComponent,
    ShowFeedbackManagerComponent,
    ShowClientGeneralUpdateComponent,
    ManagerProjectUpdateComponent,
    ProjectBudgetComponent,
    ProjetBudgetEditDeleteComponent,
    AddStakeholderComponent,
    EditDeleteStakeholderComponent,
    AddRiskProflingComponent,
    EditDeleteRiskProflingComponent,
    AddPhasesMilestoneComponent,
    EditDeletePhasesMilestoneComponent,
    AddSprintComponent,
    EditDeteteSprintComponent,
    AddAuditHistoryComponent,
    EditDeleteAuditHistoryComponent,
    AddVerionHistoryComponent,
    RoleBasedControlComponent,
    EditDeleteVersionHistoryComponent,
    EscalationMatrixComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-ayjglpjmsuf7x6yw.us.auth0.com',
      clientId: 'prcYplvZrtAYVUqpr9xHRyR6C7zLt1AU',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
