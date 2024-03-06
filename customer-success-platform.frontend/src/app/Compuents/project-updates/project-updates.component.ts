import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-project-updates',
  templateUrl: './project-updates.component.html',
  styleUrl: './project-updates.component.css',
})
export class ProjectUpdatesComponent {
  // Forms to collect the data from the client
  projectUpdatesForm: FormGroup;

  // Http injection for HTTP call
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService
  ) {
    this.projectUpdatesForm = this.formBuilder.group({
      projectId: ['', Validators.required],
      date: ['', Validators.required],
      generalUpdates: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    // Validation of form
    if (this.projectUpdatesForm.valid) {
      console.log(this.projectUpdatesForm.value);
      //storing the value of form in project api
      const project = {
        projectId: this.projectUpdatesForm.get('projectId')!.value,
        date: this.projectUpdatesForm.get('date')!.value,
        generalUpdate: this.projectUpdatesForm.get('generalUpdates')!.value,
      };

      //post the data into the server with this post method
      this.service.postProjectUpdateData(project).subscribe(
        (response: any) => {
          alert('Data is uploaded sucessfully');
        },
        (error) => {
          alert('Data is faild to updated due to invalid project id');
        }
      );
    } else {
      alert('Invalid Form');
    }
  }
}
