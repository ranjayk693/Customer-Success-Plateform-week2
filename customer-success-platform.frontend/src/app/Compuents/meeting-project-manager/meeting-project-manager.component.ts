import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-meeting-project-manager',
  templateUrl: './meeting-project-manager.component.html',
  styleUrl: './meeting-project-manager.component.css',
})
export class MeetingProjectManagerComponent {
  meetingMinutes: any[] = [
    {
      id: 1,
      projectId: 'project1',
      meetingDate: '2024-02-29',
      momLink: 'Some link',
      duration: '45 min',
      comments: 'Some comments',
    },
    {
      id: 2,
      projectId: 'project2',
      meetingDate: '2024-02-28',
      momLink: 'Another link',
      duration: '30 min',
      comments: 'Some other comments',
    },
  ];

  meetingMinuteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.meetingMinuteForm = this.fb.group({
      projectId: ['', Validators.required],
      meetingDate: ['', Validators.required],
      momLink: ['', Validators.required],
      duration: ['', Validators.required],
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
