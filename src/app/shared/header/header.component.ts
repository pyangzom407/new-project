import { Component, OnInit } from '@angular/core';
import {SharedStateService} from "../services/shared-state.service";

@Component({
  selector: 'py-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  signInForm!: boolean;
  signUpForm!:boolean;
  count!: number;
  headerOptions: {name: string, routeValue: string}[] = [
    {
      name: 'HOME',
      routeValue: ''
    },
    {
      name: 'CATEGORY',
      routeValue: '/category'
    },
    {
      name: 'SELL',
      routeValue: '/sell'
    },
    {
      name: 'ABOUT US',
      routeValue: '/aboutUs'
    }
  ]

  constructor(private shareStateService: SharedStateService) { }

  ngOnInit(): void {
    this.shareStateService.cardCount$.subscribe(resp=> {
      this.count = resp;
    })
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
