import { Component } from '@angular/core';

@Component({
  selector: 'app-auditor-dashboard',
  templateUrl: './auditor-dashboard.component.html',
  styleUrl: './auditor-dashboard.component.css',
})
export class AuditorDashboardComponent {
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
