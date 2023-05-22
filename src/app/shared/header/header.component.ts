import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'py-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  signInForm!: boolean;
  signUpForm!:boolean;

  constructor() { }

  ngOnInit(): void {
  }
  displaySignInFormModal() {
    this.signInForm = !this.signInForm;
  }

  cancelForm(event: boolean): void {
    this.signInForm = event;
    this.signUpForm =event;
  }

  displaySignUPFormModal() {
    this.signUpForm = !this.signUpForm
  }
}
