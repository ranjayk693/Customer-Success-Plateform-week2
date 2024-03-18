import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-add-risk-profling',
  templateUrl: './add-risk-profling.component.html',
  styleUrl: './add-risk-profling.component.css',
})
export class AddRiskProflingComponent {
  ProjectRiskProfiling: FormGroup;
  projectIds = [];
  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.ProjectRiskProfiling = this.fb.group({
      projectId: ['', Validators.required],
      riskType: ['', Validators.required],
      description: ['', Validators.required],
      severity: ['', Validators.required],
      impact: ['', Validators.required],
      remedialSteps: ['', Validators.required],
      status: ['', Validators.required],
      closureDate: [, Validators.required],
    });
  }

  ngOnInit(): void {
    this.service.getProjectData().subscribe((res) => {
      this.projectIds = res.items.map((item: any) => item.id);
    });
  }

  onSubmit(): void {
    if (this.ProjectRiskProfiling.valid) {
      const formData = this.ProjectRiskProfiling.value;
      this.service.postRiskProfile(formData).subscribe(
        (response) => {
          this.ProjectRiskProfiling.reset();
          this.ProjectRiskProfiling.get('projectId')!.setValue('');
          this.ProjectRiskProfiling.get('riskType')!.setValue('');
          this.ProjectRiskProfiling.get('severity')!.setValue('');
          this.ProjectRiskProfiling.get('impact')!.setValue('');
        },
        (error) => {
          console.error('Error posting data:', error);
        }
      );
    }
  }
}
