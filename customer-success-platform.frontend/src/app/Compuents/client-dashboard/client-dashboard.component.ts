import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.css',
})
export class ClientDashboardComponent {
  id:string='';
  name:string='';
  activeSection: string = 'projectUpdate';
  constructor(private router:Router ,private route:ActivatedRoute,private service:ServiceService){
    this.route.params.subscribe(params=>{
      this.id=params['id'];
    })
  
    this.service.getEmailById(this.id).subscribe(res=>{
      console.log(res.projectId)
      this.service.id=res.projectId;
      this.name=res.name;
    })


  }
  logout() {
    this.router.navigate([''])
  }

  onMeeting() {
   this.activeSection='ShowMeeting'
  }

  onFeedback() {
    this.activeSection='AddFeedback'
  }

  CheckProjectUpdate() {
    this.activeSection='projectUpdate'
  }

  onShowFeedback() {
    this.activeSection='ShowFeedback'
  }

  
}
