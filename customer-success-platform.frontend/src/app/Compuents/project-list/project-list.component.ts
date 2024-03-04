import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  projects: any = [
    {
      projectName: 'Food on time',
      startedOn: '12 Feb 24',
      status: 'On going',
      projectManager: 'Dipa Manjumdar',
      members: 6,
    },
    {
      projectName: 'HealthCare System',
      startedOn: '20 Feb 24',
      status: 'On going',
      projectManager: 'Dipa Manjumdar',
      members: 6,
    },
  ];
}
