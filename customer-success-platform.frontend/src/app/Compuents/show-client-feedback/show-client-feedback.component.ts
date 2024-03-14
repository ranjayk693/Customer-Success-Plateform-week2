import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-show-client-feedback',
  templateUrl: './show-client-feedback.component.html',
  styleUrl: './show-client-feedback.component.css',
})
export class ShowClientFeedbackComponent {
  // Array which store the client feedback
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

  onDelete(id: string) {
    if (confirm('Are you sure?')) {
      this.service.deleteClientFeedbackData(id).subscribe(
        (response) => {
          this.clientfeedback = this.clientfeedback.filter((item) => {
            item.id !== id;
          });
        },
        (error) => {
          alert('Something went wrong while deleting the item');
        }
      );
    }
  }
}
