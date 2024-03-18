import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-project-manager-dashboard',
  templateUrl: './project-manager-dashboard.component.html',
  styleUrl: './project-manager-dashboard.component.css',
})
export class ProjectManagerDashboardComponent {
  constructor(private auth: AuthService) {}


  // Harcoded role as authtication part is remaining
  users: any = [{ name: 'Dipa Di' }];

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

  // Making the meeting boolean value true and for rest it false
  activeSection: string = '';
  onMetting() {
    this.activeSection = 'Addmeeting';
  }

  onViewFeedback(): any {
    this.activeSection = 'ShowFeedback';
  }

  onAddProjectUpdate() {
    this.activeSection = 'AddProjectUpdate';
  }

  onShowProject() {
    this.activeSection = 'ShowProjectUpdate';
  }

  logout() {
    this.auth.logout({
      logoutParams: { returnTo: document.location.origin },
    });
  }
}
