import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ServiceService } from '../../Services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-based-control',
  templateUrl: './role-based-control.component.html',
  styleUrl: './role-based-control.component.css',
})
export class RoleBasedControlComponent {
  email: string | undefined = '';
  isverifed: boolean | undefined = true;

  constructor(
    private auth: AuthService,
    private service: ServiceService,
    private router: Router
  ) {
    auth.user$.subscribe((res) => {
      this.email = res!.email;
      this.isverifed = res!.email_verified;
    });

    this.service.getEmail().subscribe((res) => {
      const array = res.items;
      let data = array.filter((user: any) => user.email == this.email);
      if (data.length && this.isverifed) {
        if (data[0].role == 'admin') {
          console.log('Amin login');
          this.router.navigate(['admin']);
        } else if (data[0].role == 'auditor') {
          this.router.navigate(['auditor']);
        } else if (data[0].role == 'client') {
          this.router.navigate(['/client', data[0].id]);
        } else if (data[0].role == 'manager') {
          this.router.navigate(['/manager', data[0].id]);
        } else {
          auth.logout({ logoutParams: { returnTo: document.location.origin } });
        }
      } else {
        auth.logout({ logoutParams: { returnTo: document.location.origin } });
      }
    });
  }
}
