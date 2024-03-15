import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-edit-delete-version-history',
  templateUrl: './edit-delete-version-history.component.html',
  styleUrl: './edit-delete-version-history.component.css'
})
export class EditDeleteVersionHistoryComponent {
  projectVerionHistory: any[] = [];
  constructor(private service: ServiceService) {
    service.getVersionHistory().subscribe(
      (response) => {
        this.projectVerionHistory = response.items;
      },
      (error) => {}
    );
  }

  deleteVerionHistory(id: string) {
    if (confirm('Are you sure?')) {
      this.service.deleteVersionHistory(id).subscribe(
        (response) => {
          console.log(response);
          this.projectVerionHistory = this.projectVerionHistory.filter((item) => {
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
  }

  onEdit(item: any) {
    item.editCopy = { ...item };
    item.isEdit = true;
  }

  onUpdate(item: any) {
    const data = {
      projectId: item.projectId,
      version: item.version,
      type: item.type,
      change: item.change,
      changeReason: item.changeReason,
      createdBy: item.createdBy,
      revisionDate: item.revisionDate,
      approvalDate: item.approvalDate,
      approvedBy: item.approvedBy,
    };

    this.service.putVersionHistory(item.id, data).subscribe(
      (response) => {},
      (error) => {
        Object.assign(item, item.editCopy);
        alert('Something went wrong while updating the data');
      }
    );
    item.isEdit = false;
  }
}
