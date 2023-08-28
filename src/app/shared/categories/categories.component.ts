import { Component, OnInit } from '@angular/core';
import {SharedStateService} from "../services/shared-state.service";
import {SharedApiService} from "../services/shared-api.service";
import {count} from "rxjs";

@Component({
  selector: 'py-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  productCards! : any[];
  cardCount: number = 0;

  constructor(private shareApiService:  SharedApiService,
              private shareStateService: SharedStateService,
              ) { }

  ngOnInit(): void {
    this.shareApiService.getProduct().subscribe(resp=>{
      this.productCards = resp;
      console.log(this.productCards)
    });
  }

  addToCard(card:any): void {
    if (!card.addToCard) {
      card.addToCard = true;
      this.cardCount++
    }
    else {
      card.addToCard = false;
      this.cardCount--;
    }
    this.shareStateService.updateCount(this.cardCount)
  }

}
