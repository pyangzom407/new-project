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

  products: any = [
    {
      prod_name: 'Short Skirts',
      Prod_price: '580',
      prod_description: 'Product of Japan',
      prod_img: '/assets/images/skirt-set-bg-removed.png',
    },
    {
      prod_name: 'Jacket',
      Prod_price: '820',
      prod_description: 'Korean style',
      prod_img: '/assets/images/korean-jackets-removebg.png',
    },
    {
      prod_name: 'Kid jackets',
      Prod_price: '390',
      prod_description: 'Thailand product',
      prod_img: '/assets/images/kids-jackets-removebg.png',
    },
    {
      prod_name: 'Hoodies',
      Prod_price: '800',
      prod_description: 'Imported from Bangkok',
      prod_img: '/assets/images/hoddies-removebg.png',
    },
    {
      prod_name: 'Kid jackets',
      Prod_price: '390',
      prod_description: 'Thailand product',
      prod_img: '/assets/images/kids-jackets-removebg.png',
    },
    {
      prod_name: 'Jackets',
      Prod_price: '1200',
      prod_description: 'Bangkok product',
      prod_img: '/assets/images/k-jack3-removebg.png',
    },
    {
      prod_name: 'winter jackets',
      Prod_price: '820',
      prod_description: 'Korean style',
      prod_img: '/assets/images/korean-jackets-removebg.png',
    },
    {
      prod_name: 'Skirt',
      Prod_price: '580',
      prod_description: 'Product of Japan',
      prod_img: '/assets/images/skirt-set-bg-removed.png',
    },
    {
      prod_name: 'Hoodies',
      Prod_price: '800',
      prod_description: 'Imported from Bangkok',
      prod_img: '/assets/images/hoddies-removebg.png',
    },
    {
      prod_name: 'Short Skirts',
      Prod_price: '580',
      prod_description: 'Product of Japan',
      prod_img: '/assets/images/skirt-set-bg-removed.png',
    },
    {
      prod_name: 'winter jackets',
      Prod_price: '820',
      prod_description: 'Korean style',
      prod_img: '/assets/images/korean-jackets-removebg.png',
    }

  ];

  constructor() { }
  ngOnInit(): void {

  }
}
