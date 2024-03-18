import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  constructor(private router: Router, private auth: AuthService) {}
  users: any = [{ name: 'Chintan sir', role: 'Admin' }];
  activeSection: string = 'ShowClientFeedback';

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

  logout() {
    this.auth.logout({
      logoutParams: { returnTo: document.location.origin },
    });
  }

  createProject() {
    this.activeSection = 'NewProject';
  }

  AddResources() {
    this.activeSection = 'AddResources';
  }

  AddApproval() {
    this.activeSection = 'AddApproval';
  }

  AddStakeHolder() {
    this.activeSection = 'AddStakeHolder';
  }

  AddBudget() {
    this.activeSection = 'AddBudget';
  }

  AddRisk() {
    this.activeSection = 'AddRiskProfle';
  }
  AddSprint() {
    this.activeSection = 'AddSprint';
  }
  AddVerion() {
    this.activeSection = 'AddVersion';
  }
  AddAudit() {
    this.activeSection = 'AddAudit';
  }
  AddPhases() {
    this.activeSection = 'AddPhaseMileStone';
  }

  ShowApproveTeam() {
    this.activeSection = 'ShowApproveTeam';
  }

  ShowResources() {
    this.activeSection = 'ShowResources';
  }

  ShowRisk() {
    this.activeSection = 'ShowRisk';
  }
  ShowSprint() {
    this.activeSection = 'ShowSprint';
  }
  ShowVersion() {
    this.activeSection = 'VersionHistory';
  }
  ShowAudit() {
    this.activeSection = 'showAudit';
  }
  ShowProjectUpdate() {
    this.activeSection = 'ShowProjectUpdate';
  }
  ShowClientFeedback() {
    this.activeSection = 'ShowClientFeedback';
  }
  ShowStakeHolder() {
    this.activeSection = 'ShowStakeHolder';
  }
  ShowPhases() {
    this.activeSection = 'showPhases';
  }
  ShowEsclationMatrix() {
    this.activeSection = 'ShowEscalation';
  }
}
