import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-add-phases-milestone',
  templateUrl: './add-phases-milestone.component.html',
  styleUrl: './add-phases-milestone.component.css',
})
export class AddPhasesMilestoneComponent {
  projectPhase: FormGroup;
  projectIds = [];
  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.projectPhase = this.fb.group({
      projectId: ['', Validators.required],
      title: ['', Validators.required],
      startDate: ['', Validators.required],
      completionDate: ['', Validators.required],
      approvalDate: ['', Validators.required],
      status: ['', Validators.required],
      revisedCompletionDate: ['', Validators.required],
      comments: [, Validators.required],
    });
  }

  ngOnInit(): void {
    this.service.getProjectData().subscribe((res) => {
      this.projectIds = res.items.map((item: any) => item.id);
    });
  }

  onSubmit(): void {
    if (this.projectPhase.valid) {
      const formData = this.projectPhase.value;
      this.service.postPhaseMileStone(formData).subscribe(
        (response) => {
          this.projectPhase.reset();
          this.projectPhase.get('projectId')!.setValue('');
          this.projectPhase.get('startDate')!.setValue('');
          this.projectPhase.get('status')!.setValue('');
        },
        (error) => {
          console.error('Error posting data:', error);
        }
      );
    }
  }
}
