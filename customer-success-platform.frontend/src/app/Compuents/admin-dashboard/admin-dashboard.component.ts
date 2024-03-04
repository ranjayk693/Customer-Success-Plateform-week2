import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  users: any = [{ name: 'Aadhya Sharma', role: 'Auditor' }];

  onProjectClick() {
    this.IsProjectList = true;
    this.IsNewProject = false;
  }
  onNewProject() {
    this.IsProjectList = false;
    this.IsNewProject = true;
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  logout() {
    // logout
  }
}
