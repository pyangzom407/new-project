import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'py-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  status: any;
  constructor() { }
  ngOnInit(): void {
    this.status = [
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
        label: 'Bags',
        front_img: '/assets/images/side-bag.jpg',
        hint: 'Available Colors',
        back_img: '/assets/images/side-bags.jpeg'
      },
      {
        label: 'Skirt',
        front_img: '/assets/images/skirt-one.jpg',
        hint: 'Available Colors',
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
    ]
  }

}
