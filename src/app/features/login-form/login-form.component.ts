import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { InputValidation } from './validation';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      // InputValidation.passwordValidator(loginValue)
    ])),

  })

  constructor() { }


  loginTo() {
    console.log('login');
  }
  data() {
    console.log('login info', this.login.value)
  }
  ngOnInit(): void {
    this.login.valueChanges.subscribe(t => {
      console.log(t)
    })
  }

}
