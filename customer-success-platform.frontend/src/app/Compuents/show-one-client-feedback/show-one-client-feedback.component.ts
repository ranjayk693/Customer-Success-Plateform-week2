import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-show-one-client-feedback',
  templateUrl: './show-one-client-feedback.component.html',
  styleUrl: './show-one-client-feedback.component.css',
})
export class ShowOneClientFeedbackComponent {
  inputValue: string = '';
  clientfeedback: any[] = [];

  getData(): void {
    this.service.getClientFeedbackData().subscribe(
      (response) => {
        this.clientfeedback = response.items.filter((item: any) => {
          return item.projectId === this.inputValue;
        });
      },
      (error) => {
        alert('Something went wrong when getting the data from server');
      }
    );
  }

  constructor(private service: ServiceService) {}
}
