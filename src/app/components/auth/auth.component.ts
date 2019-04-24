import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {LocalStorageService} from '../../services/local-storage.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authRoute;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private snackBar: MatSnackBar,
    private route: Router,
    private activateRoute: ActivatedRoute,
  ) {
  }

  createForm = this.fb.group({
    username: ['', [Validators.required, ]],
    passwords: this.fb.group({
      password: ['', [Validators.required, ]],
      confirmPassword: ['', [Validators.required, ]]
    }, { validator: this.passwordConfirming }),
    email: ['', [Validators.required, Validators.email, ]],
  });

  loginForm = this.fb.group({
    password: ['', [Validators.required, ]],
    email: ['', [Validators.required, ]]
  });

  signUp() {
    if (this.createForm.valid) {
      const body = {
        username: this.createForm.value.username,
        password: this.createForm.value.passwords.password,
        email: this.createForm.value.email
      };
      this.authService.createUser(body).subscribe(
        (response) => {
          this.localStorageService.saveToken(response);
          console.log(response);
        },
        (error) => {
          if (error.status === 400) {
            console.log(error);
            this.snackBar.open(error.error, 'Ok');
          }
        }
      );
    }
  }

  signIn() {
    this.authService.logInUser(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        if (error.status === 400) {
          console.log(error);
          this.snackBar.open(error.error, 'Ok');
        }
      }
    );
  }

  private passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return {invalid: true};
    }
  }

  ngOnInit() {
    console.log(this.route.url);
    this.activateRoute.paramMap.subscribe((params: ParamMap) => {
      this.authRoute = params.get('logged');
      console.log(params.get('logged'));
    });
  }
}
