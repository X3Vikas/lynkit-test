import { SessionService } from '../../services/session.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginFormSubmitted: boolean;
  isInvalidCredentials: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private _SessionService: SessionService,
    private _Router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.loginFormSubmitted = false;
    this.isInvalidCredentials = false;
  }

  loginFormSubmit() {
    this.loginFormSubmitted = true;
    if (this.loginForm.valid) {
      const email = this._SessionService.getSession('email');
      const password = this._SessionService.getSession('password');
      if (this.loginForm.controls.email.value === email && this.loginForm.controls.password.value === password) {
        this._Router.navigate(['./home']);
      } else {
        this.isInvalidCredentials = true;
        this._Router.navigate(['/']);
      }
    }

  }
}
