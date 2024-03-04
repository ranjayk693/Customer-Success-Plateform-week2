import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-client-meeting',
  templateUrl: './client-meeting.component.html',
  styleUrl: './client-meeting.component.css',
})
export class ClientMeetingComponent {
  meetingMinutes: any[] = [
    {
      id: 1,
      projectId: 'project1',
      meetingDate: '2024-02-29',
      momLink: 'Some link',
      duration: '45 min',
      comments: 'Some comments',
    },
  ];
}
