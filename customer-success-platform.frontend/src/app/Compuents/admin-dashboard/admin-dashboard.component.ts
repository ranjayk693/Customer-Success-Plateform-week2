import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {

  users: any = [{ name: 'Chintan sir', role: 'Admin' }];

  logout() {
    // logout
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
  ShowVersion(){}
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
