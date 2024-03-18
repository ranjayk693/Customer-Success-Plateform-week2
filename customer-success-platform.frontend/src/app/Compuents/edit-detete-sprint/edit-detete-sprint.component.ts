import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-edit-detete-sprint',
  templateUrl: './edit-detete-sprint.component.html',
  styleUrl: './edit-detete-sprint.component.css',
})
export class EditDeteteSprintComponent {
  projectSprint: any[] = [];
  constructor(private service: ServiceService) {
    service.getSprint().subscribe(
      (response) => {
        this.projectSprint = response.items;
      },
      (error) => {}
    );
  }

  deleteSprint(id: string) {
    if (confirm('Are you sure?')) {
      this.service.deleteSprint(id).subscribe(
        (response) => {
          this.projectSprint = this.projectSprint.filter(
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
      phaseMilestoneId: item.phaseMilestoneId,
      sprintNumber: item.sprintNumber,
      startDate: item.startDate,
      endDate: item.endDate,
      status: item.status,
      comments: item.comments,
    };
    this.service.putSprint(item.id, data).subscribe(
      (response) => {},
      (error) => {
        Object.assign(item, item.editCopy);
        alert('Something went wrong while updating the data');
      }
    );
    item.isEdit = false;
  }
}
