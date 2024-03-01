import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meeting-minute',
  templateUrl: './meeting-minute.component.html',
  styleUrl: './meeting-minute.component.css',
})
export class MeetingMinuteComponent {
  meetingMinutes: any[] = [
    {
      id: 1,
      projectId: 'project1',
      meetingDate: '2024-02-29',
      momLink: 'Some link',
      comments: 'Some comments',
    },
    {
      id: 2,
      projectId: 'project2',
      meetingDate: '2024-02-28',
      momLink: 'Another link',
      comments: 'Some other comments',
    },
  ];

  meetingMinuteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.meetingMinuteForm = this.fb.group({
      projectId: ['', Validators.required],
      meetingDate: ['', Validators.required],
      momLink: ['', Validators.required],
      comments: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  addMeetingMinute(): void {
    if (this.meetingMinuteForm.valid) {
      const newMeetingMinute = this.meetingMinuteForm.value;
      this.meetingMinutes.push(newMeetingMinute);
      this.meetingMinuteForm.reset();
    }
  }

  updateMeetingMinute(meetingMinute: any) {
    const index = this.meetingMinutes.findIndex(
      (m) => m.id === meetingMinute.id
    );
    if (index !== -1) {
      this.meetingMinutes[index] = meetingMinute;
    }
  }

  deleteMeetingMinute(id: number) {
    this.meetingMinutes = this.meetingMinutes.filter((m) => m.id !== id);
  }
}
