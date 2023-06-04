import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'libs/auth/data-access/src/lib/services/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'exe-project-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    // Send login request to the server
    // Example: Using HttpClient module
    this.authService.login(email, password).subscribe(
      (response) => {
        // Handle successful login
        if (response.status_code >= 200 && response.status_code < 300) {
          const authToken = response.data.access_token;
          const refreshToken = response.data.refresh_token;
          localStorage.setItem('accessToken', authToken);
          localStorage.setItem('refreshToken', refreshToken);
          this.router.navigate(['/home']);
        }
      },
      (error) => {
        if (error.status === 500) {
          this.toastr.error('An error occurred. Please try again later.');
        } else if (error.status == 400) {
          this.toastr.warning('Wrong password.');
        } else if (error.status == 404) {
          this.toastr.warning('User not exist.');
        }
      },
    );
  }
}
