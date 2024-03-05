import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-show-update',
  templateUrl: './show-update.component.html',
  styleUrl: './show-update.component.css',
})
export class ShowUpdateComponent {
  projects: any[] = [];

  //service injection
  constructor(private service: ServiceService) {
    this.service.getProjectUpdateData().subscribe((response: any) => {
      this.projects = response.items;
      console.log(response);
    });
  }
}
