import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-feedback',
  templateUrl: './client-feedback.component.html',
  styleUrl: './client-feedback.component.css',
})
export class ClientFeedbackComponent {
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    // Handle form submission here
    console.log(this.feedbackForm.value);
  }

  ngOnInit(): void {}
}
