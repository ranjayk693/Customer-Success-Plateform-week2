import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-project-manager-dashboard',
  templateUrl: './project-manager-dashboard.component.html',
  styleUrl: './project-manager-dashboard.component.css',
})
export class ProjectManagerDashboardComponent {
  constructor(private auth: AuthService) {}

  // Boolean Value to display the data
  IsMeeting: boolean = true;
  IsFeedback: boolean = false;
  IsProjectUpdate: boolean = false;
  IsShowProject: boolean = false;
  // Harcoded role as authtication part is remaining
  users: any = [{ name: 'Dipa Di', }];

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
    this.auth.logout({
      logoutParams: { returnTo: document.location.origin },
    });
  }
}
