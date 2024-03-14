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
  onCancel(item: any) {
    Object.assign(item, item.editCopy);
    item.isEdit = false;
    console.log(item);
  }

  onEdit(item: any) {
    item.editCopy = { ...item };
    item.isEdit = true;
    console.log(item);
  }

  onUpdate(item: any) {
    const data = {
      projectId: item.projectId,
      resourceName: item.resourceName,
      role: item.role,
      startDate: item.startDate,
      endDate: item.endDate,
      comment: item.comment,
    };
    this.service.putResourcesData(item.id, data).subscribe(
      (response) => {},
      (error) => {
        Object.assign(item, item.editCopy);
        alert('Something went wrong while updating the data');
      }
    );
    item.isEdit = false;
  }
}
