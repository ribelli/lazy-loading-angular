import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      user: new FormControl('Tom', Validators.required),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userContact: new FormControl(),
    });
  }

  ngOnInit(): void {}

  submit(){
    console.log(this.userForm);
  }
}
