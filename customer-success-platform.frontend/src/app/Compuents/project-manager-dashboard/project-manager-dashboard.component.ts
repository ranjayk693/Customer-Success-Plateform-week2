import { Component } from '@angular/core';

@Component({
  selector: 'app-project-manager-dashboard',
  templateUrl: './project-manager-dashboard.component.html',
  styleUrl: './project-manager-dashboard.component.css',
})
export class ProjectManagerDashboardComponent {
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
  IsMeeting: boolean = true;
  IsFeedback: boolean = false;
  IsProjectUpdate: boolean = false;
  users: any = [{ name: 'Dipa Di', role: 'project Manager' }];

  onMetting() {
    this.IsFeedback = false;
    this.IsProjectUpdate = false;
    this.IsMeeting = true;
  }

  onViewFeedback(): any {
    //view feedbacked
    this.IsMeeting = false;
    this.IsProjectUpdate = false;
    this.IsFeedback = true;
  }

  onAddProjectUpdate() {
    this.IsMeeting = false;
    this.IsFeedback = false;
    this.IsProjectUpdate = true;
  }

  logout() {
    // logout
  }
}
