import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    'username': new FormControl(null, Validators.required),
    'password': new FormControl(null, Validators.required),
    'repeatPassword': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'phone': new FormControl(null, Validators.required),
    'sex': new FormControl(null, Validators.required),
    'interest1': new FormControl(false),
    'interest2': new FormControl(false),
    'policy': new FormControl(false, Validators.requiredTrue)
  }, { validators: this.passwordMatchValidator });

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')!.value;
    const repeatPassword = control.get('repeatPassword')!.value;
    return password === repeatPassword ? null : { 'mismatch': true };
  }

  ngOnInit() {
  }

  registerUser() {
    console.log(this.registerForm.value);
  }
}