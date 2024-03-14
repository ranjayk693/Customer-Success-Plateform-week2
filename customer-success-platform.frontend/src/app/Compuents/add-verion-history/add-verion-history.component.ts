import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-add-verion-history',
  templateUrl: './add-verion-history.component.html',
  styleUrl: './add-verion-history.component.css',
})
export class AddVerionHistoryComponent {
  projectVerionHistory: FormGroup;
  projectIds = [];
  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.projectVerionHistory = this.fb.group({
      projectId: ['', Validators.required],
      version: ['', Validators.required],
      type: ['', Validators.required],
      change: ['', Validators.required],
      changeReason: ['', Validators.required],
      createdBy: ['', Validators.required],
      revisionDate: ['', Validators.required],
      approvalDate: ['', Validators.required],
      approvedBy: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.service.getProjectData().subscribe((res) => {
      this.projectIds = res.items.map((item: any) => item.id);
    });
  }

  onSubmit(): void {
    if (this.projectVerionHistory.valid) {
      const formData = this.projectVerionHistory.value;
      this.service.postVersionHistory(formData).subscribe(
        (response) => {
          this.projectVerionHistory.reset();
        },
        (error) => {
          console.error('Error posting data:', error);
        }
      );
    }
  }
}
