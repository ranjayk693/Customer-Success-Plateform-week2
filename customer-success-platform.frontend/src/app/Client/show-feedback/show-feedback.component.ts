import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-show-feedback',
  templateUrl: './show-feedback.component.html',
  styleUrl: './show-feedback.component.css',
})
export class ShowFeedbackComponent {
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

  onCancel(item: any) {
    Object.assign(item, item.editCopy);
    item.isEdit = false;
    console.log(item);
  }

  onEdit(item: any) {
    item.editCopy = { ...item };
    item.isEdit = true;
    console.log(item);
  }

  onUpdate(item: any) {
    const data = {
      projectId: item.projectId,
      feedbackType: item.feedbackType,
      dateReceived: item.dateReceived,
      details: item.details,
      actionTaken: item.actionTaken,
      closureDate: item.closureDate,
    };
    this.service.putClientFeedbackData(item.id, data).subscribe(
      (response) => {},
      (error) => {
        Object.assign(item, item.editCopy);
        alert('Something went wrong while updating the data');
      }
    );
    item.isEdit = false;
  }
}

//  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//  "projectId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//  "feedbackType": 0,
//  "dateReceived": "2024-03-11T06:40:24.698Z",
//  "details": "string",
//  "actionTaken": "string",
//  "closureDate": "2024-03-11T06:40:24.698Z"
