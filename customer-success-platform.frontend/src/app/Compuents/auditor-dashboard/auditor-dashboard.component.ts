import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auditor-dashboard',
  templateUrl: './auditor-dashboard.component.html',
  styleUrl: './auditor-dashboard.component.css',
})
export class AuditorDashboardComponent {
  constructor(private router:Router){}
  users: any = [{ name: 'Audiotr', role: 'Auditor' }];

  logout() {
    this.router.navigate([''])
  }

  activeSection: string = '';

  createProject() {
    this.activeSection = 'NewProject';
  }

  AddResources() {
    this.activeSection = 'AddResources';
  }

  AddApproval() {
    this.activeSection = 'AddApproval';
  }

  AddStakeHolder(){
    this.activeSection='AddStakeHolder';
  }

  AddBudget(){
    this.activeSection='AddBudget'
  }

  AddRisk(){
    this.activeSection='AddRiskProfle'
  }
  AddSprint(){
    this.activeSection='AddSprint'
  }
  AddVerion(){
    this.activeSection='AddVersion'
  }
  AddAudit(){
    this.activeSection="AddAudit"
  }
  AddPhases(){
    this.activeSection='AddPhaseMileStone'
  }
  // Define other methods similarly
  
  ShowApproveTeam() {
    this.activeSection = 'ShowApproveTeam';
  }

  ShowResources() {
    this.activeSection = 'ShowResources';
  }



  ShowRisk(){
    this.activeSection='ShowRisk'
  }
  ShowSprint(){
    this.activeSection='ShowSprint'
  }
  ShowVersion(){
    this.activeSection='VersionHistory'
  }
  ShowAudit(){
    this.activeSection='showAudit'
  }
  ShowProjectUpdate(){
    this.activeSection='ShowProjectUpdate'
  }
  ShowClientFeedback(){
    this.activeSection='ShowClientFeedback'
  }
  ShowStakeHolder(){
    this.activeSection='ShowStakeHolder'
  }
  ShowPhases(){
    this.activeSection='showPhases'
  }
}
