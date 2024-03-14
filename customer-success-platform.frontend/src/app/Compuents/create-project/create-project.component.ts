import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css',
})
export class CreateProjectComponent {
  projectForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.projectForm = this.fb.group({
      // id: ['', Validators.required],
      Name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.projectForm.valid) {
      const data = this.projectForm.value;
      this.service.postProjectData(data).subscribe(
        (res) => {},
        (error) => {
          console.error('Error occur while posting data');
        }
      );
    }
  }
}
