import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {
  private catrgoryStateSubject = new BehaviorSubject<any[]>([]);
  private countSubject = new BehaviorSubject<number>(0);

  constructor() {
  }
  productCards$: Observable<any[]> = this.catrgoryStateSubject.asObservable();
  cardCount$: Observable<number> = this.countSubject.asObservable();

  updateCategory(products: any[]): void {
   this.catrgoryStateSubject.next(products);
  }

  updateCount(count: number): void {
    this.countSubject.next(count)
  }
}
