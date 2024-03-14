import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-project-budget',
  templateUrl: './project-budget.component.html',
  styleUrl: './project-budget.component.css',
})
export class ProjectBudgetComponent {
  projectBudgetForm: FormGroup;
  projectIds = [];
  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.projectBudgetForm = this.fb.group({
      projectId: ['', Validators.required],
      type: [0, Validators.required],
      durationInMonths: [0, Validators.required],
      budgetedHours: [0, Validators.required],
    });
  }

  ngOnInit(): void {
    this.service.getProjectData().subscribe((res) => {
      this.projectIds = res.items.map((item: any) => item.id);
    });
  }

  onSubmit(): void {
    if (this.projectBudgetForm.valid) {
      const formData = this.projectBudgetForm.value;
      this.service.postProjectBudget(formData).subscribe(
        (response) => {
          console.log('Data posted successfully:', response);
          this.projectBudgetForm.reset();
        },
        (error) => {
          console.error('Error posting data:', error);
        }
      );
    }
  }
}
