import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServiceService } from '../../Services/service.service';
import { AuthService } from '@auth0/auth0-angular';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.css',
})
export class ClientDashboardComponent {
  id: string = '';
  name: string = '';
  activeSection: string = 'projectUpdate';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ServiceService,
    private auth: AuthService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.service.getEmailById(this.id).subscribe((res) => {
      console.log(res.projectId);
      this.service.id = res.projectId;
      this.name = res.name;
    });
  }
  logout() {
    this.auth.logout({
      logoutParams: { returnTo: document.location.origin },
    });
  }

  SavePDF() {
    const element = document.getElementById('content');
    if (element) {
      const width = element.getBoundingClientRect().width;
      const height = element.getBoundingClientRect().height;
      const aspectRatio = width / height;

      html2canvas(element, { scale: 1 }).then((canvas) => {
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.width / aspectRatio;
        const pdf = new jsPDF('l', 'pt', [canvasWidth, canvasHeight]);
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, canvasWidth, canvasHeight);
        pdf.save('web-page-content.pdf');
      });
    }
  }

  onMeeting() {
    this.activeSection = 'ShowMeeting';
  }

  onFeedback() {
    this.activeSection = 'AddFeedback';
  }

  CheckProjectUpdate() {
    this.activeSection = 'projectUpdate';
  }

  onShowFeedback() {
    this.activeSection = 'ShowFeedback';
  }
}
