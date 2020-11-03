import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {
  credientials: any = {
    email: '',
    password: {
      value: '',
      visibility: false
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
