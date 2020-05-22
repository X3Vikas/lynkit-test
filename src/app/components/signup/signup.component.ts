import { SessionService } from '../../services/session.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { of as observableOf, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']

})
export class SignUpComponent {
  signUpForm: FormGroup;
  signUpFormSubmitted: boolean;
  constructor(
    private _FormBuilder: FormBuilder,
    private _SessionService: SessionService,
    private _Router: Router
  ) {
    this.signUpForm = this._FormBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(10)]],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
      confirmPassword: [null, [Validators.required], this.confirmPasswordValidation()]
    });
    this.signUpFormSubmitted = false;
  }

  confirmPasswordValidation(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return control.value === this.signUpForm.controls.password.value ? observableOf(null) : observableOf({ notSame: true });
    };
  }

  signUpFormSubmit() {
    this.signUpFormSubmitted = true;
    if (this.signUpForm.valid) {
      const email = this._SessionService.getSession('email');
      if (email) {
        this._SessionService.removeSessions();
      }
      this._SessionService.setSession(this.signUpForm.value);
      this._Router.navigate(['./login']);
    }


  }
}
