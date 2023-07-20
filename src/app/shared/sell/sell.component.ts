import { Component, OnInit } from '@angular/core';
import {SharedApiService} from "../services/shared-api.service";
import {tap} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'py-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  selectedFile!: File | null;
  images!: { imageUrl: string, id: number }[];
  productDetailsForm!: boolean;
  productForm!: FormGroup;

  products!: any;

  constructor(private sharedApiService: SharedApiService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
      productImage: ['']
    })
    this.getAllImages();
    this.getAllProducts();
  }
  showProductDetailsForm() {
    this.productDetailsForm = !this.productDetailsForm;
  }
  cancelForm(event: boolean): void {
    this.productDetailsForm = event;
  }

  imageUpload(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      this.previewImage();
    }
  }

  previewImage(): void {
    if (this.selectedFile) {}
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile as Blob);
    reader.onload = () => {
      const imageUrl = reader.result;
      // this.sharedApiService.uploadSellImage({imageUrl}).subscribe(
      //   () => this.getAllImages()
      // );
      this.productForm.get('productImage')?.setValue(imageUrl)
    }
  }

  getAllImages(): void {
    this.sharedApiService.getImages().pipe(
      tap(
        (images) => {
          this.images = images
        }
      )
    ).subscribe()
  }

  deleteProduct(id:number):  void {
    this.sharedApiService.deleteProduct(id).subscribe(
      () => {
        this.getAllProducts();
      }
    )
  }

  addProduct(): void {
    this.sharedApiService.addProduct(this.productForm.value).subscribe(() => {
      this.getAllProducts();
      this.cancelForm(true);
      }
    )
  }

  getAllProducts(): void {
    this.sharedApiService.getProduct().subscribe(
      resp => {
        this.products = resp
      }
    );
  }
}

