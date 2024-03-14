import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-resources-data',
  templateUrl: './resources-data.component.html',
  styleUrl: './resources-data.component.css',
})
export class ResourcesDataComponent {
  projectIds: string[] = [];
  resourceForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.resourceForm = this.fb.group({
      projectId: ['', Validators.required],
      resourceName: ['', Validators.required],
      role: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      comment: [''],
    });
  }

  ngOnInit() {
    this.service.getProjectData().subscribe(
      (response) => {
        this.projectIds = response.items.map((item: any) => item.id);
        console.log(this.projectIds);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit(): void {
    if (this.resourceForm.valid) {
      const data = {
        projectId: this.resourceForm.get('projectId')!.value,
        resourceName: this.resourceForm.get('resourceName')!.value,
        role: this.resourceForm.get('role')!.value,
        startDate: this.resourceForm.get('startDate')!.value,
        endDate: this.resourceForm.get('endDate')!.value,
        comment: this.resourceForm.get('comment')!.value,
      };
      this.service.postResourcesData(data).subscribe(
        (response) => {
          alert('Data is uploaded sucessfully');
        },
        (error) => {
          alert('Something went wrong while uploading the data');
        }
      );
    }
  }
}
