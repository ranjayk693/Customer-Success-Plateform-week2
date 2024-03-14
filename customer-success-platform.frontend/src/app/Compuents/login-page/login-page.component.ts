import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  // constructor(public auth: AuthService) {}
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {
    auth.loginWithRedirect();
  }

  ngOnInit() {
    this.auth.user$.subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        alert('Error');
      }
    );
  }
}
