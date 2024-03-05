import { Component } from '@angular/core';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.css',
})
export class ClientDashboardComponent {
  logout() {
    //implimentation for logout
  }

  IsUpdate: boolean = true;
  IsMeeting: boolean = false;
  IsFeedback: boolean = false;

  onMeeting() {
    this.IsUpdate = false;
    this.IsFeedback = false;
    this.IsMeeting = true;
  }

  onFeedback() {
    this.IsUpdate = false;
    this.IsMeeting = false;
    this.IsFeedback = true;
  }

  CheckProjectUpdate() {
    this.IsFeedback = false;
    this.IsMeeting = false;
    this.IsUpdate = true;
  }
}
