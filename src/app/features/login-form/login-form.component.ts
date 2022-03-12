import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  login = new FormGroup({
    email: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required, Validators.min(6)] })
  })
  constructor() { }

  loginTo() {
    console.log('login');
  }
  data() {
    console.log(this.login.value)
  }
  ngOnInit(): void {
    this.login.valueChanges.subscribe(t => {
      console.log(t)
    })
  }

}
