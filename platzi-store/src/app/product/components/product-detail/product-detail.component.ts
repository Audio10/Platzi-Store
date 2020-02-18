import { ProductsService } from '../../../core/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/product/components/product/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    // subscribe escucha los cambios que se hacen en los parametros.
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'Nuevo desde angular',
      image: '../../../../assets/images/banner-1.jpg',
      price: 3000,
      description: 'Nuevo producto'
    };

    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      image: '../../../../assets/images/camiseta.png',
      price: 5555,
      description: 'Edicion Titulo'
    };

    this.productsService.updateProduct('222', updateProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productsService.deleteProduct('222')
      .subscribe(res => {
        console.log(res);
      });
  }
}
