import { Component } from '@angular/core';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.css',
})
export class ClientDashboardComponent {
  constructor() {}
  userName = 'Ranjay';
  showDropdown = false;
  logout(): void {
    // Perform logout actions here, such as clearing session data or redirecting to the login page
    console.log('Logout clicked');
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }
}
