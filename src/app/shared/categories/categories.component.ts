import { Component, OnInit } from '@angular/core';
import {count} from "rxjs";

@Component({
  selector: 'py-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  cardCount: number = 0;
  x: number = 0;

  cards: any = [
    {
      img: '/assets/images/hills.jpg',
      caption: 'bangkok product',
      id: 0
    },
    {
      img: '/assets/images/jackets.jpg',
      caption: 'for Her',
      id: 1
    },
    {
      img: '/assets/images/tops.jpeg',
      caption: 'korean product',
      id: 2
    },
    {
      img: '/assets/images/pers.jpeg',
      caption: 'ladies bracelet',
      id: 3
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }


  addToCard(cards: number, index:number) { debugger
    this.cards.forEach((res: { id: number; })=>{ debugger
      if(res.id === index) this.x++;
    });
    for (let i = 0; i <= cards; i++) {
      if (index == i && this.x == 1) {
        this.cardCount++;
      }
    }
    console.log(this.cardCount)
  }
}
