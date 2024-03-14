import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-edit-delete-risk-profling',
  templateUrl: './edit-delete-risk-profling.component.html',
  styleUrl: './edit-delete-risk-profling.component.css',
})
export class EditDeleteRiskProflingComponent {
  projectRiskProfiling: any[] = [];
  constructor(private service: ServiceService) {
    service.getRiskProfile().subscribe(
      (response) => {
        this.projectRiskProfiling = response.items;
      },
      (error) => {}
    );
  }

  deleteRisk(id: string) {
    if (confirm('Are you sure?')) {
      this.service.deleteRiskProfile(id).subscribe(
        (response) => {
          // console.log(response);
          this.projectRiskProfiling = this.projectRiskProfiling.filter(
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
      riskType: item.riskType,
      description: item.description,
      severity: item.severity,
      impact: item.impact,
      remedialSteps: item.remedialSteps,
      status: item.status,
      closureDate: item.closureDate,
    };
    this.service.putRiskProfile(item.id, data).subscribe(
      (response) => {},
      (error) => {
        Object.assign(item, item.editCopy);
        alert('Something went wrong while updating the data');
      }
    );
    item.isEdit = false;
  }
}
