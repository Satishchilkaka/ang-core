import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  nameValidator() {
    return [Validators.required, Validators.minLength(3),
    Validators.pattern('^[a-zA-Z0-9_ ]*$'), Validators.maxLength(25)]
  }

  registration = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3),
    Validators.pattern('^[a-zA-Z0-9_ ]*$'), Validators.maxLength(25),
    ]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10),
    Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),

    email: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required] })
  })
  // nameValidator( ){
  //   return this.registration.get('firstName').hasError('required') ? 'You must enter a value' :
  //     this.registration.get('firstName').hasError('pattern') ? 'Not a valid name' : '';
  // }
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
