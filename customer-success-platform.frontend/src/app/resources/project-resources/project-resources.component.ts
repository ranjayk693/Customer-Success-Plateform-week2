import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-resources',
  templateUrl: './project-resources.component.html',
  styleUrl: './project-resources.component.css',
})
export class ProjectResourcesComponent {
  projectResources: any[] = [
    {
      id: 1,
      projectId: 'project1',
      resourceId: 'resource1',
      allocationPercentage: 50,
      start: '2024-02-29',
      end: '2024-03-29',
      role: 'Developer',
    },
    {
      id: 2,
      projectId: 'project2',
      resourceId: 'resource2',
      allocationPercentage: 100,
      start: '2024-02-28',
      end: '2024-03-28',
      role: 'Designer',
    },
  ];

  projectResourceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.projectResourceForm = this.fb.group({
      projectId: ['', Validators.required],
      resourceId: ['', Validators.required],
      allocationPercentage: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  addProjectResource(): void {
    if (this.projectResourceForm.valid) {
      const newProjectResource = this.projectResourceForm.value;
      this.projectResources.push(newProjectResource);
      this.projectResourceForm.reset();
    }
  }

  updateProjectResource(projectResource: any) {
    const index = this.projectResources.findIndex(
      (pr) => pr.id === projectResource.id
    );
    if (index !== -1) {
      this.projectResources[index] = projectResource;
    }
  }

  deleteProjectResource(id: number) {
    this.projectResources = this.projectResources.filter((pr) => pr.id !== id);
  }
}
