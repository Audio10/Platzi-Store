import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/product/components/product/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  @Input() product: Product; // Recibe una propiedad desde otro component

  @Output() productClicked: EventEmitter<string> = new EventEmitter();


  today = new Date();

  constructor() { }

  ngOnInit() { }

  addCart() {
    console.log('Agregar al carrito');
    this.productClicked.emit(this.product.id);
  }

}
