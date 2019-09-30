import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) {
    
  }

  ngOnInit() {
    debugger;
  }
  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const email = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.Auth.getUserDetails(email, password).subscribe(data=>{
      if(data.success){
        debugger;
        this.router.navigate([''])
        this.Auth.setLoggedIn(true)
      }else{
        window.alert(data.message)
      }
    })

    console.log(email, password)
  }
}
