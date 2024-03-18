import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-edit-delete-stakeholder',
  templateUrl: './edit-delete-stakeholder.component.html',
  styleUrl: './edit-delete-stakeholder.component.css',
})
export class EditDeleteStakeholderComponent {
  projectStakeholder: any[] = [];
  constructor(private service: ServiceService) {
    service.getStakeHolder().subscribe(
      (response) => {
        this.projectStakeholder = response.items;
      },
      (error) => {}
    );
  }

  deleteResource(id: string) {
    if (confirm('Are you sure?')) {
      this.service.deleteStakeHolder(id).subscribe(
        (response) => {
          console.log(response);
          this.projectStakeholder = this.projectStakeholder.filter(
            (item) => item.id !== id
          );
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
      title: item.title,
      name: item.name,
      contact: item.contact,
      email: item.email,
    };
    this.service.putStakeHolder(item.id, data).subscribe(
      (response) => {},
      (error) => {
        Object.assign(item, item.editCopy);
        alert('Something went wrong while updating the data');
      }
    );
    item.isEdit = false;
  }
}
