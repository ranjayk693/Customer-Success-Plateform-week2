import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-edit-delete-audit-history',
  templateUrl: './edit-delete-audit-history.component.html',
  styleUrl: './edit-delete-audit-history.component.css',
})
export class EditDeleteAuditHistoryComponent {
  projectAuditHistory: any[] = [];
  constructor(private service: ServiceService) {
    service.getAuditHistory().subscribe(
      (response) => {
        this.projectAuditHistory = response.items;
      },
      (error) => {}
    );
  }

  deleteAuditHistory(id: string) {
    if (confirm('Are you sure?')) {
      this.service.deleteAuditHistory(id).subscribe(
        (response) => {
          console.log(response);
          this.projectAuditHistory = this.projectAuditHistory.filter((item) => {
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
      dateofAudit: item.dateofAudit,
      reviewedBy: item.reviewedBy,
      status: item.status,
      reviewedSection: item.reviewedSection,
      commentQueries: item.commentQueries,
      actionItem: item.actionItem,
    };
    this.service.putAuditHistory(item.id, data).subscribe(
      (response) => {},
      (error) => {
        Object.assign(item, item.editCopy);
        alert('Something went wrong while updating the data');
      }
    );
    item.isEdit = false;
  }
}
