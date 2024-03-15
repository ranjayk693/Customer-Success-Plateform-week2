import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-role-based-control',
  templateUrl: './role-based-control.component.html',
  styleUrl: './role-based-control.component.css'
})
export class RoleBasedControlComponent {
  //   constructor(
  //     @Inject(DOCUMENT) public document: Document,
  //   public auth: AuthService
  // ) {}

  // ngOnInit() {
  //   this.auth.user$.subscribe(
  //     (response) => {
  //       console.log(response);
  //     },
  //     (error) => {
  //       alert('Error');
  //     }
  //   );
  // }

  constructor(private auth:AuthService){}

  
}
