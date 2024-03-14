import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-show-client-general-update',
  templateUrl: './show-client-general-update.component.html',
  styleUrl: './show-client-general-update.component.css',
})
export class ShowClientGeneralUpdateComponent {
  projects: any[] = [];

  //service injection
  constructor(private service: ServiceService) {
    this.service.getProjectUpdateData().subscribe(
      (response: any) => {
        this.projects = response.items;
      },
      (error) => {
        alert('Something went wrong while fetching the data from server');
      }
    );
  }
}
