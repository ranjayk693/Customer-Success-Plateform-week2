import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  showDropdown = false;
  projects: any = [
    {
      projectName: 'Food on time',
      startedOn: '12 Feb 24',
      status: 'On going',
      projectManager: 'Dipa Manjumdar',
      members: 6,
    },
  ];
  IsProjectList: boolean = true;
  IsNewProject: boolean = false;
  IsProjectUpdate: boolean = false;
  users: any = [{ name: 'Chintan Sir', role: 'Admin' }];

  onProjectClick() {
    this.IsProjectList = true;
    this.IsNewProject = false;
    this.IsProjectUpdate = false;
  }
  onNewProject() {
    this.IsProjectList = false;
    this.IsProjectUpdate = false;
    this.IsNewProject = true;
  }

  onProjectUpdate() {
    this.IsProjectList = false;
    this.IsNewProject = false;
    this.IsProjectUpdate = true;
  }

  logout() {
    // logout
  }
}
