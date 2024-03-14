import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-project-manager-dashboard',
  templateUrl: './project-manager-dashboard.component.html',
  styleUrl: './project-manager-dashboard.component.css',
})
export class ProjectManagerDashboardComponent {
  // HardCoded Data as not required according to documentation
  projects: any = [
    {
      projectName: 'Food on time',
      startedOn: '12 Feb 24',
      status: 'On going',
      projectManager: 'Dipa Manjumdar',
      members: 6,
    },
  ];

  // Boolean Value to display the data
  IsMeeting: boolean = true;
  IsFeedback: boolean = false;
  IsProjectUpdate: boolean = false;
  IsShowProject: boolean = false;
  // Harcoded role as authtication part is remaining
  users: any = [{ name: 'Dipa Di', role: 'project Manager' }];

  // Making the meeting boolean value true and for rest it false
  onMetting() {
    this.IsFeedback = false;
    this.IsProjectUpdate = false;
    this.IsShowProject = false;
    this.IsMeeting = true;
  }

  onViewFeedback(): any {
    this.IsMeeting = false;
    this.IsProjectUpdate = false;
    this.IsShowProject = false;
    this.IsFeedback = true;
  }

  onAddProjectUpdate() {
    this.IsMeeting = false;
    this.IsFeedback = false;
    this.IsShowProject = false;
    this.IsProjectUpdate = true;
  }

  onShowProject() {
    this.IsMeeting = false;
    this.IsFeedback = false;
    this.IsProjectUpdate = false;
    this.IsShowProject = true;
  }

  logout() {
    // logout
  }
}
