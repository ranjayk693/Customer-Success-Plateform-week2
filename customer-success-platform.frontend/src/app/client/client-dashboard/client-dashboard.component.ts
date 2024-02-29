import { Component } from '@angular/core';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.css'
})
export class ClientDashboardComponent {

  clientFeedbacks:any=[];

  constructor() { 
    this.clientFeedbacks=[{feedbackType:"Negative"},{dateReceived:15/10/2001},{detailedFeedback:"Detailed feedback test"},{actionItem:"Need improvement"},{closureData:18/10/2002}]
  }

  ngOnInit(): void {
    this.loadClientFeedbacks();
  }

  loadClientFeedbacks(): void {
    // this.clientFeedbackService.getClientFeedbacks()
    //   .subscribe(clientFeedbacks => this.clientFeedbacks = clientFeedbacks);
  }

}
