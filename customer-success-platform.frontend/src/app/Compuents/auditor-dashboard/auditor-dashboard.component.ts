import { Component } from '@angular/core';

@Component({
  selector: 'app-auditor-dashboard',
  templateUrl: './auditor-dashboard.component.html',
  styleUrl: './auditor-dashboard.component.css',
})
export class AuditorDashboardComponent {
  showDropdown = false;

  // HardCoded data
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
  IsResources: boolean = false;
  users: any = [{ name: 'Supreme Ranjan', role: 'Auditor' }];

  onProjectClick() {
    this.IsResources = false;
    this.IsNewProject = false;
    this.IsProjectList = true;
  }
  onNewProject() {
    this.IsProjectList = false;
    this.IsResources = false;
    this.IsNewProject = true;
  }

  OnResources() {
    this.IsProjectList = false;
    this.IsNewProject = false;
    this.IsResources = true;
  }

  logout() {
    // logout
  }
}
