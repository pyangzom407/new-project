import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'py-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  images: { urlLink: string, imageSrc: string }[] = [
    {
      urlLink: 'https://www.facebook.com/profile.php?id=100029793171635',
      imageSrc: '/assets/images/Facebook-Logo.png'
    },
    {
      urlLink: 'https://www.instagram.com/yangzomlotus/',
      imageSrc: '/assets/images/instagram-logo.png'},
    {
      urlLink: 'https://www.linkedin.com/in/pema-yangzom-360bb7221/',
      imageSrc:'/assets/images/link.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
