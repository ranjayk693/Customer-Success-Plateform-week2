import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-projet-budget-edit-delete',
  templateUrl: './projet-budget-edit-delete.component.html',
  styleUrl: './projet-budget-edit-delete.component.css',
})
export class ProjetBudgetEditDeleteComponent {
  projectBudget: any[] = [];
  constructor(private service: ServiceService) {
    service.getProjectBudget().subscribe(
      (response) => {
        this.projectBudget = response.items;
      },
      (error) => {}
    );
  }

  deleteResource(id: string) {
    if (confirm('Are you sure?')) {
      this.service.deleteProjectBudget(id).subscribe(
        (response) => {
          this.projectBudget = this.projectBudget.filter((item) => {
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
      type: item.type,
      durationInMonths: item.durationInMonths,
      budgetedHours: item.budgetedHours,
    };
    this.service.putProjectBudget(item.id, data).subscribe(
      (response) => {},
      (error) => {
        Object.assign(item, item.editCopy);
        alert('Something went wrong while updating the data');
      }
    );
    item.isEdit = false;
  }
}
