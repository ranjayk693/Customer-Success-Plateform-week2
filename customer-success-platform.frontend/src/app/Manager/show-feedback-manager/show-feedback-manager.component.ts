import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-show-feedback-manager',
  templateUrl: './show-feedback-manager.component.html',
  styleUrl: './show-feedback-manager.component.css',
})
export class ShowFeedbackManagerComponent {
  clientfeedback: any[] = [];

  // Client feedback get method call from the database
  constructor(private service: ServiceService) {
    this.service.getClientFeedbackData().subscribe(
      (response) => {
        this.clientfeedback = response.items;
      },
      (error) => {
        alert('Something went wrong when getting the data from server');
      }
    );
  }
}
