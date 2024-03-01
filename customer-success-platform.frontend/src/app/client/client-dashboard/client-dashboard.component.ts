import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.css',
})
export class ClientDashboardComponent {
  clientFeedbacks: any[] = [
    {
      id: 1,
      projectId: 'project1',
      feedbackDate: '2024-02-29',
      feedbackType: 'Complaint',
      details: 'Some details',
    },
    {
      id: 2,
      projectId: 'project2',
      feedbackDate: '2024-02-28',
      feedbackType: 'Appreciation',
      details: 'Some other details',
    },
  ];

  feedbackForm:FormGroup;
  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      projectId: ['', Validators.required],
      feedbackDate: ['', Validators.required],
      feedbackType: ['', Validators.required],
      details: ['', Validators.required]
    });
  }
   

  addFeedback(): void {
    if (this.feedbackForm.valid) {
      const newFeedback = this.feedbackForm.value;
      this.clientFeedbacks.push(newFeedback);
      this.feedbackForm.reset();
    }
  }


  updateFeedback(feedback: any) {
    const index = this.clientFeedbacks.findIndex((f) => f.id === feedback.id);
    if (index !== -1) {
      this.clientFeedbacks[index] = feedback;
    }
  }

  deleteFeedback(id: number) {
    this.clientFeedbacks = this.clientFeedbacks.filter((f) => f.id !== id);
  }

}
  



