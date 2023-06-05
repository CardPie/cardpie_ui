import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'libs/auth/data-access/src/lib/services/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'exe-project-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        account_type: ['', Validators.required],
        fullname: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {validator: this.passwordMatchValidator},
    );
  }

  passwordMatchValidator(
    formGroup: FormGroup,
  ): null | {passwordMismatch: boolean} {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');

    if (password!.value !== confirmPassword!.value) {
      confirmPassword!.setErrors({passwordMismatch: true});
    } else {
      confirmPassword!.setErrors(null);
    }

    return null;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    const fullname = this.registerForm.value.fullname;
    const account_type = this.registerForm.value.account_type;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

    this.authService
      .register(fullname, account_type, email, password)
      .subscribe(
        (response) => {
          // Handle successful login
          if (response.status_code >= 200 && response.status_code < 300) {
            this.toastr.success('Register successfully');
            this.router.navigate(['/login']);
          }
        },
        (error) => {
          console.log(error);
          this.toastr.error(error.error.message);
        },
      );
  }
}
