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
    this.service.getProjectUpdateData().subscribe(
      (response: any) => {
        this.projects = response.items;
      },
      (error) => {
        alert('Something went wrong while fetching the data from server');
      }
    );
  }

  onDeleteItem(id: string) {
    if (confirm('Are you sure')) {
      this.service.deleteProjectUpdateData(id).subscribe((response) => {
        this.projects = this.projects.filter((item) => {
          item.id !== id;
        });
      });
    }
  }
}
