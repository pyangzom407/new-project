import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedApiService {

  constructor(private httpClient: HttpClient ) { }

  uploadSellImage(imageUrl: any) {
    return this.httpClient.post<any>("http://localhost:3000/images", imageUrl).pipe(
      map((res: any) => {
        return res
      })
    )
  }

  getImages() {
    return this.httpClient.get<any>("http://localhost:3000/images").pipe(
      map((res: any) => {
        return res
      })

    )
  }

  addProduct(product: any) {
    return this.httpClient.post<any>("http://localhost:3000/products", product).pipe(
      map((res: any) => {
        return res
      })
    )
  }
  getProduct() {
    return this.httpClient.get<any>("http://localhost:3000/products").pipe(
      map((res:any) => {
        return res
      })
    )
  }
  deleteProduct(id:number) {
    return this.httpClient.delete<any>("http://localhost:3000/products/"+id).pipe(
      map((res:any)=> {
        return res
      })
    )
  }

}
