import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-add-audit-history',
  templateUrl: './add-audit-history.component.html',
  styleUrl: './add-audit-history.component.css',
})
export class AddAuditHistoryComponent {
  projectAuditHistory: FormGroup;
  projectIds = [];
  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.projectAuditHistory = this.fb.group({
      projectId: ['', Validators.required],
      dateofAudit: ['', Validators.required],
      reviewedBy: ['', Validators.required],
      status: ['', Validators.required],
      reviewedSection: ['', Validators.required],
      commentQueries: ['', Validators.required],
      actionItem: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.service.getProjectData().subscribe((res) => {
      this.projectIds = res.items.map((item: any) => item.id);
    });
  }

  onSubmit(): void {
    if (this.projectAuditHistory.valid) {
      const formData = this.projectAuditHistory.value;
      this.service.postAuditHistory(formData).subscribe(
        (response) => {
          this.projectAuditHistory.reset();
        },
        (error) => {
          console.error('Error posting data:', error);
        }
      );
    }
  }
}
