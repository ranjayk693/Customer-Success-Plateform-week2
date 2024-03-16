import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-client-feedback',
  templateUrl: './client-feedback.component.html',
  styleUrl: './client-feedback.component.css',
})
export class ClientFeedbackComponent {
  // Feedback form when client enter something
  feedbackForm: FormGroup;
  projectIds:any=[];
  // Form Initlixzation in constructor and service injection
  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.feedbackForm = this.fb.group({
      ProjectId: ['', Validators.required],
      type: ['Positive', Validators.required],
      dateReceived: [
        new Date().toISOString().split('T')[0],
        Validators.required,
      ],
      detailedFeedback: ['', Validators.required],
      actionTaken: ['', Validators.required],
      closureDate: [
        { value: new Date().toISOString().split('T')[0], disabled: true },
      ],
    });
    this.service.getProjectData().subscribe((res)=>{
      this.projectIds = res.items.map((item: any) => item.id);
    })
  }

  // Sent the feedback to the server
  onSubmit(): void {
    if (this.feedbackForm.valid) {
      const feedbackData = {
        projectId: this.feedbackForm.get('ProjectId')!.value,
        feedbackType:
          this.feedbackForm.get('type')!.value === 'Positive' ? 0 : 1,
        dateReceived: new Date(
          this.feedbackForm.get('dateReceived')!.value
        ).toISOString(),
        details: this.feedbackForm.get('detailedFeedback')!.value,
        actionTaken: this.feedbackForm.get('actionTaken')!.value,
        closureDate: new Date(
          this.feedbackForm.get('closureDate')!.value
        ).toISOString(),
      };

      // post method
      this.service.postClientFeedbackData(feedbackData).subscribe(
        (response: any) => {
          alert('Data is sucessfully send');
        },
        (error) => {
          alert('Something went wrong while posting the data');
        }
      );
    } else {
      alert('All Values are require');
    }
  }

  ngOnInit(): void {}
}
