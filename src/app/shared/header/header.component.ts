import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'py-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerOptions: {headerTitle: string, routeValue: string}[] = [
    {headerTitle: 'home', routeValue: 'home'},
    {headerTitle: 'categories', routeValue: 'categories'},
    {headerTitle: 'about us', routeValue: 'about_us'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
