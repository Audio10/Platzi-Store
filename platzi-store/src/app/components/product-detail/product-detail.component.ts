import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    // subscribe escucha los cambios que se hacen en los parametros.
    this.route.params.subscribe( (params: Params) => {
      const id = params.id;
      const producto = this.productsService.getProduct(id);
      console.log(producto);
    });
  }

}
