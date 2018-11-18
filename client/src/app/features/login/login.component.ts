import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hidePassword = true;
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  loginForm = new FormGroup({
    username: this.username,
    password: this.password
  });

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      this.authService.checkUserLogin(this.username.value, this.password.value);

      if (this.authService.isUserAuthenticated) {
        this.router.navigate(['/dashboard']);
      }
    }
  }
}
