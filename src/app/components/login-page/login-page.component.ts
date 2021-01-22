import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm = {
    username: "",
    password: ""
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.loginForm);
  }

}
