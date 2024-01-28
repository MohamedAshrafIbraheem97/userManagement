import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit(): void {}

  submitForm(): void {
    const loginData: LoginRequest = {
      password: this.loginForm.value.password ?? '',
      email: this.loginForm.value.email ?? '',
    };
    this.loginUser(loginData);
  }

  private navigateToHomeScreen() {
    this.router.navigate(['/user-management']);
  }

  private loginUser(loginRequestBody: LoginRequest) {
    this.authService.login(loginRequestBody).subscribe({
      next: (res) => {
        if (res) {
          this.navigateToHomeScreen();
        }
      },
    });
  }
}
