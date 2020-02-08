# PlatziStore

Bienvenido al curso de Angular con platzi este es un manual de todo lo aprendido en el curso.

## 1.- Data binging en Angular.

Para demostrar esta funcionalidad se ocupa **ngModel** la cual es una directiva para asociar el modelo de datos con el template.

**Template**

```html
<input type="text" [(ngModel)]="title">
{{ title }}
```

**Module**

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 1. SE AGREGA EL MODULO.
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   	// 2. SE AGREGA A LOS IMPORTS LO CUAL NOS PERMITE OCUPARLO.
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**Component**

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
}
```

## 2.- Uso de ngIf 

[Documentación]: https://angular.io/api/common/NgIf#description	"Documentación."

Sirve para mostrar condicionales dentro de un template. Cuenta con bloques como **then(true) **, **else(false)** 

**Template**

```html
//1.- Condicion si es true
<div *ngIf="title === 'nicolas'; else elseBlock">
  Es comple la condicion
</div>
```

## 3.- Uso de ngFor add y delete.

[Documentación]: https://angular.io/api/common/NgForOf	"Documentación"

Sirve para recorrer elementos iterables dentro del template.

**Component**

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';

  items = ['nicolas', 'julian', 'perez'];

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
  // 1.- El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
    this.items.splice(index, 1);
  }
}
```

**Template**

```html
// 1.- Los eventos se escuchan usando la notacion ("Evento")="Funcion"
<button (click)="addItem()">Add item</button>

<ul>
  <li *ngIf="items.length === 0">la lista esta vacia</li>
  // 2.- ngFor declarando el item y el index.
  <li *ngFor="let name of items; index as i">
    {{ name }} {{ i }}
    <button (click)="deleteItem(i)">delete</button>
  </li>
</ul>
```

**Notas:**

- El método `splice()` cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
- `*ngFor` permite al obtención del index mediante la variable `index`
- Los eventos se escuchan usando la notación `(Evento)=Funcion`

## 4.- Uso de ngFor para recorrer objetos.

**Interface**

Las interfaces sirven para definir types en TypeScript.

```javascript
export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}
```

**Component**

```javascript
import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';

  items = ['nicolas', 'julian', 'perez'];

  objeto = {};

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
  ];

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}

```

**Template**

```html
<div *ngFor="let product of products">
  {{ product.title }}
  // Al cambiar un atributo HTML.
  <img [src]="product.image" alt="" />
  {{ product.price }}
</div>
```

**Notas:**

- Una buena practica es definir datos con Interfaces.
- Los objetos que no son iterables generaran un error.
- Al cambiar una atributo del **html** se ocupan llaves cuadradas por ejemplo con `[src]="product.image"`



## 5.- Uso de ngSwtich

```html
<div [ngSwitch]="title">
<p *ngSwitchCase="'nicolas'">
  Nicolas
</p>
<p *ngSwitchCase="'julian'">
  Julian
</p>
<p *ngSwitchDefault>
  Nombre de una persona.
</p>
</div>
```

**Notas:**

- Se ocupa la directiva ngSwitch con corchetes. `[ngSwitch]="variable"`

- Si la condición es un String va con `''`

  

## 6.- ¿Qué son los componentes y decoradores?

**Se puede generar con el CLI con la siguiente sentencia.**

```bash
ng g ccomponent NOMBRE
```

**Notas:**

- Extiende de Component.
- Debe ser especificado en el app.module.

# 7.- Uso de Inputs y Outputs

![image-20200208135326298](C:\Users\claud\AppData\Roaming\Typora\typora-user-images\image-20200208135326298.png)

### Input

Es la forma de hacer **Property Binding**. Consiste en pasar un parámetro del componente padre al hijo mediante propiedades.

**Componente.ts**

```
@Input() product: Product;
```

**Padre.html**

El padre envia la propiedad mediante `[Input]="DATA"`

```html
<div>
  <app-product *ngFor="let product of products" [product]="product"></app-product>
</div>
```

### Output

Es la forma de hacer **Event Binding**. Consiste en enviar información del Componente a su padre, mediante eventos emitidos por el componente hijo.

**Componente.ts**

```javascript
@Output() productClicked: EventEmitter<string> = new EventEmitter();

// Cuando se invoque este metodo el componente emitira el evento mediante el Output.
 addCart() {
    console.log('Agregar al carrito');
    this.productClicked.emit(this.product.id);
  }
```



**ComponentePadrHTML**

```html
<div>
    // Cuando se emita un evento de productClicked llamas al metodo del padre clickProduct.
  <app-product *ngFor="let product of products" (productClicked)="clickProduct($event)"></app-product>
</div>
```



**ComponentePadre.ts**

```
  clickProduct(id: string) {
    console.log('product');
    console.log(id);
  }
```



**Notas:**

- Las propiedades se pasa mediante `[]`
- Los eventos se pasan mediante `()`