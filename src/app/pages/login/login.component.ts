import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInfo: UserInfo = {uniqueName: '', name: '', email: '', uniqueNameOrEmail: '', password: ''};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickSignUp() {
    const container = document.getElementById('container');
    container.classList.add('right-panel-active');
  }

  clickSignIn() {
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
  }

  signin() {
    this.router.navigate(['/']);
  }

  signup() {
    this.router.navigate(['/']);
  }
}

export interface UserInfo {
  uniqueName: string;
  name: string;
  email: string;
  uniqueNameOrEmail: string;
  password: string;
}