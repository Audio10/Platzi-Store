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
  ) { }

  ngOnInit() {
    // subscribe escucha los cambios que se hacen en los parametros.
    this.route.params.subscribe( (params: Params) => {
      const id = params.id;
      this.product = this.productsService.getProduct(id);
    });
  }

}
