import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-view-approve-team',
  templateUrl: './view-approve-team.component.html',
  styleUrl: './view-approve-team.component.css',
})
export class ViewApproveTeamComponent {
  projectData: any[] = []; //empty array

  // Contructor to create the service
  constructor(private service: ServiceService) {
    service.getApprovedTeamData().subscribe(
      (response) => {
        this.projectData = response.items;
      },
      (error) => {
        alert('Someting went wrong while fetching the api');
      }
    );
  }

  onDeleteProject(id: string) {
    if (confirm('Are you sure?')) {
      this.service.deleteApproveTeamData(id).subscribe(
        (response) => {
          this.projectData = this.projectData.filter((item) => item.id !== id);
        },
        (error) => {
          alert('Something went wrong while Deleting data');
        }
      );
    }
  }
}
