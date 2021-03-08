import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { TextValidator } from './valadation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  submitted: boolean = false;

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      first_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      last_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('', Validators.required),
    });

    this.form.valueChanges.subscribe((data) => {
      console.log(data);
    });

    this.form.controls['first_name'].valueChanges.subscribe((data) => {
      console.log(data);
    });
    this.form.controls['first_name'].statusChanges.subscribe((data) => {
      console.log(data);
    });

    this.form.statusChanges.subscribe((data) => {
      console.log(data);
    });
  }
  onsbmited() {
    this.submitted = true;
  }
  onclick() {
    alert(JSON.stringify(this.form.value));
  }
  cancel() {
    this.form.setValue({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmpassword: '',
    });
  }
  get f() {
    return this.form.controls;

    /* or you can do this 
    get email (){
      return this.form.get('email')
    } 
    get password(){
      return this.form.get('password')
    }*/
  }
}
