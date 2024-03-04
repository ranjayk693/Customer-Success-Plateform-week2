import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-client-feedback',
  templateUrl: './client-feedback.component.html',
  styleUrl: './client-feedback.component.css',
})
export class ClientFeedbackComponent {
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.feedbackForm = this.fb.group({
      type: ['Positive', Validators.required],
      dateReceived: [
        new Date().toISOString().split('T')[0],
        Validators.required,
      ],
      detailedFeedback: ['', Validators.required],
      actionTaken: [{ value: 'Action Taken', disabled: true }],
      closureDate: [
        { value: new Date().toISOString().split('T')[0], disabled: true },
      ],
    });
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      const feedbackData = {
        projectId: '3fa85f64-5717-4562-b3fc-2c963f66afa6', //Dummy id from swagger
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

      this.service
        .postClientFeedbackData(feedbackData)
        .subscribe((response: any) => {
          // console.log(response);
          // Handle success or error response from the server
          alert('Data is sucessfully send');
        });
    } else {
      alert('Invalid Input');
    }
  }

  ngOnInit(): void {}
}
