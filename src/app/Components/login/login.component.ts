import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() username: string;
  @Input() password: string;

  constructor() { 
    this.username = '';
    this.password = '';
  }



}
