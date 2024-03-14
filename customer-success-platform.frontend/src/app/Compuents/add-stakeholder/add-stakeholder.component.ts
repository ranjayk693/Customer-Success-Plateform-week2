import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-add-stakeholder',
  templateUrl: './add-stakeholder.component.html',
  styleUrl: './add-stakeholder.component.css',
})
export class AddStakeholderComponent {
  projectStakeHolder: FormGroup;
  projectIds = [];
  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.projectStakeHolder = this.fb.group({
      projectId: ['', Validators.required],
      title: ['', Validators.required],
      name: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', Validators.required],
    });
  }



  ngOnInit(): void {
    this.service.getProjectData().subscribe((res) => {
      this.projectIds = res.items.map((item: any) => item.id);
    });
  }

  onSubmit(): void {
    if (this.projectStakeHolder.valid) {
      const formData = this.projectStakeHolder.value;
      this.service.postStakeHolder(formData).subscribe(
        (response) => {
          this.projectStakeHolder.reset();
        },
        (error) => {
          console.error('Error posting data:', error);
        }
      );
    }
  }
}
