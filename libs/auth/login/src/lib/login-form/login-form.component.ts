import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'libs/auth/data-access/src/lib/services/auth.service';
@Component({
  selector: 'exe-project-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    // Send login request to the server
    // Example: Using HttpClient module
    this.authService.login(username, password).subscribe(
      (response) => {
        // Handle successful login
        if (response.status_code >= 200 && response.status_code < 300) {
          const authToken = response.data.access_token;
          const refreshToken = response.data.refresh_token;
          localStorage.setItem('authToken', authToken);
          localStorage.setItem('refreshToken', refreshToken);
        }
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('login error', error);
      },
    );
  }
}
