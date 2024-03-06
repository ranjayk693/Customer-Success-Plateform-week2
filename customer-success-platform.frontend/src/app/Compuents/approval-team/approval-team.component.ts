import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-approval-team',
  templateUrl: './approval-team.component.html',
  styleUrl: './approval-team.component.css',
})
export class ApprovalTeamComponent {
  resourceForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.resourceForm = this.fb.group({
      projectId: ['', Validators.required],
      noOfResources: [, Validators.required],
      role: ['', Validators.required],
      availability: ['', Validators.required],
      duration: [, Validators.required],
      phase: [, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.resourceForm.valid) {
      const data = {
        projectId: this.resourceForm.get('projectId')!.value,
        noOfResources: this.resourceForm.get('noOfResources')!.value,
        role: this.resourceForm.get('role')!.value,
        availability: this.resourceForm.get('availability')!.value,
        duration: this.resourceForm.get('duration')!.value,
        phase: this.resourceForm.get('phase')!.value,
      };

      this.service.postApproveTeamData(data).subscribe(
        (response) => {
          alert('Data is sent sucessfully');
        },
        (error) => {
          alert('Something went worng while sending data');
        }
      );
    } else {
      // Form is invalid, display error messages
    }
  }
}
