import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-view-resources',
  templateUrl: './view-resources.component.html',
  styleUrl: './view-resources.component.css',
})
export class ViewResourcesComponent {
  projectData: any[] = [];
  constructor(private service: ServiceService) {
    service.getResourcesData().subscribe(
      (response) => {
        this.projectData = response.items;
      },
      (error) => {
        alert('Something went wrong while fetching the data');
      }
    );
  }

  deleteResource(id: string) {
    if (confirm('Are you sure?')) {
      this.service.deleteResourcesData(id).subscribe(
        (response) => {
          this.projectData = this.projectData.filter((item) => {
            item.id !== id;
          });
        },
        (error) => {
          alert('OOPS! server error');
        }
      );
    }
  }
}
