import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  date: Date = new Date();
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.loginForm.value);
  }
  ngOnInit(): void {
  }
}
