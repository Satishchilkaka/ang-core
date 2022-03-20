import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registration = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)
    ]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required] })
  })
  signIn() {
    console.log('login');
  }
  data() {
    console.log(this.registration.value)
  }
  signUpData: any = {};
  getRegData() {
    return this.signUpData === this.registration.value

  }
  ngOnInit(): void {
    this.registration.valueChanges.subscribe(t => {
      console.log(t.firstName)
    })
    console.log('error', this.registration.errors)
  }
}
