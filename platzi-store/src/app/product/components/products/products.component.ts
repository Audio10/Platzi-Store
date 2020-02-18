import { ProductsService } from './../../../core/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/components/product/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: string) {
    console.log('product');
    console.log(id);
  }

  fetchProducts() {
    // Recibe un observable
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
}
