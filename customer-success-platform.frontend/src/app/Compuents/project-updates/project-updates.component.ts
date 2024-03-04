import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-updates',
  templateUrl: './project-updates.component.html',
  styleUrl: './project-updates.component.css',
})
export class ProjectUpdatesComponent {
  projectUpdatesForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.projectUpdatesForm = this.formBuilder.group({
      projectId: ['', Validators.required],
      date: ['', Validators.required],
      generalUpdates: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.projectUpdatesForm.valid) {
      // Process the form data (e.g., send it to a server)
      console.log(this.projectUpdatesForm.value);
    } else {
      // Display validation errors to the user
      console.log('Form is invalid');
    }
  }
  
}
