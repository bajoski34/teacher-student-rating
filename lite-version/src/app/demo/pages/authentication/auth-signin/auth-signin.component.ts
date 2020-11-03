import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  credientials: any = {
    password: {
      visibility: false
    }
  }
  validation_response: any = {
    success: [],
    failure: [],
    isSubmitted: false,
    disable: false
  }
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private AuthenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  valdator(){
    return this.loginForm.controls;
  }
  onSubmitLogin(){
    this.validation_response.failure = [];
    this.validation_response.success= [];
    this.validation_response.isSubmitted = false;
    if(this.loginForm.controls.email.invalid || this.loginForm.controls.password.invalid){
      this.validation_response.isSubmitted = true;
      return;
    }
    this.validation_response.disable = true;
    let formData = new FormData();
    formData.append('email', this.loginForm.controls.email.value);
    formData.append('password', this.loginForm.controls.password.value);
    this.AuthenticationService.login(formData).subscribe(data=> {
      if(data['status'] !== '200'){
        this.validation_response.failure.push(data['response']);
        this.validation_response.disable = false;
      }else{
        this.tokenSetup(data);
        this.validation_response.success.push(data['response']);
      }
    });
  }
  tokenSetup(data){
    this.AuthenticationService.handle({token: data['access_token'], user: data['user']});
    return this.router.navigate(['authenticated/dashboard/analytics']);
  }
}
