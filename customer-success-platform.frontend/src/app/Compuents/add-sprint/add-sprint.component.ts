import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-add-sprint',
  templateUrl: './add-sprint.component.html',
  styleUrl: './add-sprint.component.css',
})
export class AddSprintComponent {
  projectSprint: FormGroup;
  projectIds = [];
  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.projectSprint = this.fb.group({
      phaseMilestoneId: ['', Validators.required],
      sprintNumber: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: ['', Validators.required],
      comments: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.service.getPhaseMileStone().subscribe((res) => {
      console.log(res);
      this.projectIds = res.items.map((item: any) => item.id);
    });
  }

  onSubmit(): void {
    if (this.projectSprint.valid) {
      const formData = this.projectSprint.value;
      this.service.postSprint(formData).subscribe(
        (response) => {
          this.projectSprint.reset();
        },
        (error) => {
          console.error('Error posting data:', error);
        }
      );
    }
  }
}
