import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'py-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  status: any =[
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

  items: any =[
    'Fashion is a trend. Beauty is your style',
    'If you love something, wear it all the time... Find things that suit you. Thats how you look extraordinary.',
    'Fashion reflect who you are',
    'What you wear is how you present yourself to the world'
  ];

  constructor() { }
  ngOnInit(): void {

  }
}
