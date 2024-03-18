import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ServiceService } from '../../Services/service.service';
import { RoleBasedControlComponent } from '../role-based-control/role-based-control.component';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  constructor(
    public auth: AuthService,
    private router: Router,
    private servcie: ServiceService
  ) {}
  username = '';
  password = '';
  role = '';

  onSubmit() {
    // this.servcie.getEmail().subscribe((res)=>{
    //   const array=res.items;
    //   let data=array.filter((user:any)=>user.email==this.username);

    //   if(data.length){
    //     console.log(data[0])
    //     if(data[0].password==this.password && data[0].role=="admin"){
    //       console.log("Amin login")
    //       this.router.navigate(['admin']);
    //     }
    //     else if(data[0].password==this.password && data[0].role=="auditor"){
    //       this.router.navigate(['auditor']);
    //     }
    //     else if(data[0].password==this.password && data[0].role=="client"){
    //       this.router.navigate(['/client',data[0].id]);
    //     }
    //     else if(data[0].password==this.password && data[0].role=="manager"){
    //       this.router.navigate(['/manager',data[0].id]);
    //     }
    //   }
    // })

    const data = {
      email: this.username,
      password: this.password,
      isAuthentic: false,
    };
    this.servcie.postEmailValidate(data).subscribe((res) => {
      console.log(res);
      this.role = res.role;
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
            console.log('No match found');
        }
      } else {
        console.log('No password matched');
      }
    });
  }

  onAuthRedirect() {
    this.auth.loginWithRedirect();
  }
}
