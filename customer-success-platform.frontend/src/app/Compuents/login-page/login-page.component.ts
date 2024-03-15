import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ServiceService } from '../../Services/service.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  // constructor(public auth: AuthService) {}
  // constructor(
  //   @Inject(DOCUMENT) public document: Document,
  //   public auth: AuthService
  // ) {
  //   auth.loginWithRedirect();
  // }

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

    constructor(private auth:AuthService,private router:Router ,private servcie:ServiceService){
      // this.auth.isAuthenticated$.subscribe((isLogin)=>{
      //   console.log(isLogin);
      //   if(false){
      //     this.router.navigate(['rediretinglogin']);
      //   }else{
      //     this.auth.loginWithRedirect();
      //   }
      // })
   
    }

    username="";
    password="";
    role="";
  
    onSubmit(){
      // this.auth.user$.subscribe((res)=>{
      //   console.log("")
      // })
      // this.service
      this.servcie.getEmail().subscribe((res)=>{
        // console.log(res.items)
        const array=res.items;
        let data=array.filter((user:any)=>user.email==this.username);
      
        if(data.length){
          console.log(data)
          if(data[0].password==this.password && data[0].role=="admin"){
            console.log("Amin login")
            this.router.navigate(['admin']);
          }
          else if(data[0].password==this.password && data[0].role=="auditor"){
            this.router.navigate(['admin']);
          }
          else if(data[0].password==this.password && data[0].role=="client"){
            this.router.navigate(['client']);
            console.log("Login sucess")
          }
        }
      })
      
    }

    onAuthRedirect(){
      this.auth.loginWithRedirect();
    }
}
