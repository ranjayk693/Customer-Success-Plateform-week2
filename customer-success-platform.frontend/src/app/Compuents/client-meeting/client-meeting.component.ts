import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';
@Component({
  selector: 'app-client-meeting',
  templateUrl: './client-meeting.component.html',
  styleUrl: './client-meeting.component.css',
})
export class ClientMeetingComponent {
  meetingMinutes: any[] = [];

  constructor(private service: ServiceService) {
    this.service.getMeetingMinuteData().subscribe((response) => {
      this.meetingMinutes = response.items;
    });
  }
  hasMeetingMinutes(): boolean {
    return this.meetingMinutes.length > 0;
  }
}
