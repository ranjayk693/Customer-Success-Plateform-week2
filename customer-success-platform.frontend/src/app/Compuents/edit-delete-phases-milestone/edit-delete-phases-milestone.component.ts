import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-edit-delete-phases-milestone',
  templateUrl: './edit-delete-phases-milestone.component.html',
  styleUrl: './edit-delete-phases-milestone.component.css',
})
export class EditDeletePhasesMilestoneComponent {
  projectPhaseMileStone: any[] = [];
  constructor(private service: ServiceService) {
    service.getPhaseMileStone().subscribe(
      (response) => {
        this.projectPhaseMileStone = response.items;
      },
      (error) => {}
    );
  }

  deletePhase(id: string) {
    if (confirm('Are you sure?')) {
      this.service.deletePhaseMileStone(id).subscribe(
        (response) => {
          // console.log(response);
          this.projectPhaseMileStone = this.projectPhaseMileStone.filter(
            (item) => {
              item.id !== id;
            }
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
    // console.log(item);
  }

  onEdit(item: any) {
    item.editCopy = { ...item };
    item.isEdit = true;
    // console.log(item);
  }

  onUpdate(item: any) {
    const data = {
      projectId: item.projectId,
      title: item.title,
      startDate: item.startDate,
      completionDate: item.completionDate,
      approvalDate: item.approvalDate,
      status: item.status,
      revisedCompletionDate: item.revisedCompletionDate,
      comments: item.comments,
    };
    this.service.putPhaseMileStone(item.id, data).subscribe(
      (response) => {},
      (error) => {
        Object.assign(item, item.editCopy);
        alert('Something went wrong while updating the data');
      }
    );
    item.isEdit = false;
  }
}
