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
  isverifed: boolean | undefined = false;
  data = {};
  constructor(
    private auth: AuthService,
    private service: ServiceService,
    private router: Router
  ) {
    auth.isAuthenticated$.subscribe((res) => {
      console.log(res);
    });

    auth.user$.subscribe((res) => {
      console.log(res);
      this.email = res!.email;
      this.isverifed = res!.email_verified;
      console.log(this.email);
      console.log(this.isverifed);
      this.data = {
        email: this.email,
        password: '',
        isAuthentic: this.isverifed,
      };

      /*Checking from the backend */
      this.service.postEmailValidate(this.data).subscribe(
        (res) => {
          if (res.isAuthentic) {
            console.log('Authentic');
            switch (res.role) {
              case 0:
                this.router.navigate(['admin']);
                break;
              case 1:
                this.router.navigate(['auditor']);
                break;
              case 2:
                this.router.navigate(['manager']);
                break;
              case 3:
                console.log('client check');
                this.router.navigate(['client']);
                break;
              default:
                this.auth.logout({
                  logoutParams: { returnTo: document.location.origin },
                });
            }
          } else {
            this.auth.logout({
              logoutParams: { returnTo: document.location.origin },
            });
          }
        },
        (error) => {
          console.log('backend error:');
          logoutParams: {
            returnTo: document.location.origin;
          }
        }
      );
    });
  }
}
