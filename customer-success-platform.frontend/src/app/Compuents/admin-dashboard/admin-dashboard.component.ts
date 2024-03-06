import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  ViewResources: boolean = true;
  IsNewProject: boolean = false;
  IsResources: boolean = false;
  IsApproval: boolean = false;
  IsShowApproveTeam: boolean = false;
  IsClientfeedback: boolean = false;
  IsViewProjectUpdate: boolean = false;

  users: any = [{ name: 'Supreme Ranjan', role: 'Auditor' }];

  onNewProject() {
    this.IsResources = false;
    this.IsApproval = false;
    this.IsShowApproveTeam = false;
    this.ViewResources = false;
    this.IsClientfeedback = false;
    this.IsViewProjectUpdate = false;
    this.IsNewProject = true;
  }

  OnResources() {
    this.IsNewProject = false;
    this.IsApproval = false;
    this.IsShowApproveTeam = false;
    this.ViewResources = false;
    this.IsClientfeedback = false;
    this.IsViewProjectUpdate = false;
    this.IsResources = true;
  }

  onApproval() {
    this.IsNewProject = false;
    this.IsResources = false;
    this.IsShowApproveTeam = false;
    this.ViewResources = false;
    this.IsClientfeedback = false;
    this.IsViewProjectUpdate = false;
    this.IsApproval = true;
  }

  onShowApproveTeam() {
    this.IsNewProject = false;
    this.IsResources = false;
    this.IsApproval = false;
    this.ViewResources = false;
    this.IsClientfeedback = false;
    this.IsViewProjectUpdate = false;
    this.IsShowApproveTeam = true;
  }

  onShowResources() {
    this.IsNewProject = false;
    this.IsResources = false;
    this.IsApproval = false;
    this.IsShowApproveTeam = false;
    this.IsClientfeedback = false;
    this.IsViewProjectUpdate = false;
    this.ViewResources = true;
  }

  onShowClientFeedback() {
    this.IsNewProject = false;
    this.IsResources = false;
    this.IsApproval = false;
    this.IsShowApproveTeam = false;
    this.ViewResources = false;
    this.IsViewProjectUpdate = false;
    this.IsClientfeedback = true;
  }

  onShowProjectUpdate() {
    this.IsNewProject = false;
    this.IsResources = false;
    this.IsApproval = false;
    this.IsShowApproveTeam = false;
    this.ViewResources = false;
    this.IsClientfeedback = false;
    this.IsViewProjectUpdate = true;
  }

  logout() {
    // logout
  }
}
