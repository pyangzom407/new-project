import { Component, OnInit } from '@angular/core';
import {SharedStateService} from "../services/shared-state.service";
import {SharedApiService} from "../services/shared-api.service";

@Component({
  selector: 'py-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productCards!: any[]

  status: any = [
    {
      label: 'Bags',
      front_img: '/assets/images/side-bag.jpg',
      hint: 'Available Colors',
      back_img: '/assets/images/side-bags.jpeg'
    },
    {
      label: 'Skirt',
      front_img: '/assets/images/skirt-one.jpg',
      hint: 'Available Size',
      back_img: '/assets/images/skirt-set.jpg'
    },
    {
      label: 'sandal',
      front_img: '/assets/images/hill-piece.jpeg',
      hint: 'Available size',
      back_img: '/assets/images/hill-sets.jpeg'
    },
    {
      label: 'Bags',
      front_img: '/assets/images/side-bag.jpg',
      hint: 'Available Colors',
      back_img: '/assets/images/side-bags.jpeg'
    },
    {
      label: 'Skirt',
      front_img: '/assets/images/skirt-one.jpg',
      hint: 'Available Size',
      back_img: '/assets/images/skirt-set.jpg'
    },
    {
      label: 'Earring',
      front_img: '/assets/images/earing-one.jpeg',
      hint: 'Available Designs',
      back_img: '/assets/images/earing-set.jpeg'
    },
    {
      label: 'sandal',
      front_img: '/assets/images/hill-piece.jpeg',
      hint: 'Available size',
      back_img: '/assets/images/hill-sets.jpeg'
    },
    {
      label: 'Earring',
      front_img: '/assets/images/earing-one.jpeg',
      hint: 'Available Designs',
      back_img: '/assets/images/earing-set.jpeg'
    },
    {
      label: 'sandal',
      front_img: '/assets/images/hill-piece.jpeg',
      hint: 'Available size',
      back_img: '/assets/images/hill-sets.jpeg'
    },
    {
      label: 'Earring',
      front_img: '/assets/images/earing-one.jpeg',
      hint: 'Available Designs',
      back_img: '/assets/images/earing-set.jpeg'
    },
    {
      label: 'sandal',
      front_img: '/assets/images/hill-piece.jpeg',
      hint: 'Available size',
      back_img: '/assets/images/hill-sets.jpeg'
    },
    {
      label: 'Earring',
      front_img: '/assets/images/earing-one.jpeg',
      hint: 'Available Designs',
      back_img: '/assets/images/earing-set.jpeg'
    },
    {
      label: 'sandal',
      front_img: '/assets/images/hill-piece.jpeg',
      hint: 'Available size',
      back_img: '/assets/images/hill-sets.jpeg'
    },
    {
      label: 'Earring',
      front_img: '/assets/images/earing-one.jpeg',
      hint: 'Available Designs',
      back_img: '/assets/images/earing-set.jpeg'
    },
    {
      label: 'sandal',
      front_img: '/assets/images/hill-piece.jpeg',
      hint: 'Available size',
      back_img: '/assets/images/hill-sets.jpeg'
    }

  ];
  images: any = [
    '/assets/images/pants.jpg',
    '/assets/images/jackets.jpg',
    '/assets/images/earing.jpg',
    '/assets/images/pers.jpeg',
    '/assets/images/skirts.jpg',
    '/assets/images/shoes.jpg',
    '/assets/images/cosmetics.jpeg',
    '/assets/images/bags.jpg',
    '/assets/images/boots.jpg'
  ];

  constructor(private shareApiService: SharedApiService) {
  }

  ngOnInit(): void {
    this.shareApiService.getProduct().subscribe(resp => {
      this.productCards = resp;
      console.log(this.productCards)
    });
  }
}
