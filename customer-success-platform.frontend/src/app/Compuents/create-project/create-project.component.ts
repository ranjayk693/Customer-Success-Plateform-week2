import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css',
})
export class CreateProjectComponent {
  projectForm: FormGroup;
  projectManagers = [
    { id: 1, name: 'Manager 1' },
    { id: 2, name: 'Manager 2' },
    { id: 3, name: 'Manager 3' },
  ];

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      clientName: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.email]],
      projectManager: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.projectForm.valid) {
      // Submit the form data
      console.log(this.projectForm.value);
    }
  }
}
