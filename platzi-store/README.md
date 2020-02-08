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

## 7.- Uso de Inputs y Outputs

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
- Para pasar el valor emitido por un Output se ocupa `$event`

## 8.-Ciclo de vida de los componentes!

### Constructor.

Primer hook de angular es el que se ejecuta siempre primero al inicializar un componente.

```
constructor() {
        console.log('1. constructor');
}
```

### OnChanges

Detecta los cambios y recibe el estado **anterior** y el **nuevo**.

```
 ngOnChanges(changes: SimpleChanges) {
     console.log('2. ngOnChanges');
     console.log(changes);
 }
```

### ngOnInit

Se ejecuta solo una vez y es cuando el componente se pone en pantalla.

**En este hook es donde se implementan las llamadas a los servicios de datos**

```
ngOnInit() {
    console.log('3. ngOnInit');
  }
```

### ngDoCheck

Es el hook especializado para detectar cambios a tu manera es decir OnChanges es la forma que angular tiene nativamente, pero te da la opción de que tu cheques por tu cuenta.

```
ngDoCheck() {
    console.log('4. ngDoCheck');
}
```

### ngOnDestroy

Se ejecuta cuando un componente es destruido.

```
ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }
```

## 9.- Estilos para mostrar la lista de productos

**Notas:**

- Cada componente tiene un array de archivos **css**.
- Los estilos globales van en `style.scss`



## 10.- Uso de ng generate y ng lint

```
ng g component
ng g interface
ng lint
ng lint --fix
```

## 11.- Usando los pipes de Angular

Son filtros que se aplican a los elementos de los componentes.

[PipeFechas](https://angular.io/api/common/DatePipe)

## 12.- Generar Pipe

### Generar pipe

```
ng g pipe __RUTA__
```

## **Construyendo una directiva propia**

```
ng g d __RUTA__
```

Lad directivas se especifican con el decorador **Directive** y utiliza inyeccion de dependencias mediante ElementRef.

Este ayuda a seleccionar el elemento nativo que recibe la direcctiva. En este caso se va a cambiar el color del background.

```
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef
  ) {
      element.nativeElement.style.backgroundColor = 'red';
  }

}
```

**Notas:**

- Es mejor crear pipes que funciones en el JavaScript.

## 13.-Construyendo una directiva propia

```
ng g d __RUTA__
```

Las directivas se especifican con el decorador **Directive** y utiliza inyección de dependencias mediante ElementRef.

Este ayuda a seleccionar el elemento nativo que recibe la directiva. En este caso se va a cambiar el color del background.

```
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef
  ) {
      element.nativeElement.style.backgroundColor = 'red';
  }

}
```

## 14.- Introducción al NgModule

Los módulos y rutas sirven para dividir y abstraer mejor por dominio la aplicación.

Los componentes que hacen parte de una página en particular se pueden encapsular en un mismo módulo.

Los módulos especiales son core y shared.

- Core: guarda todos los servicios y componentes que usaremos a lo largo de todos los otros módulos.
- Shared: podemos almacenar componentes y servicios compartidos.

## 15.- Creando rutas en Angular

Se deben asignar en el **app-routing.module.ts**

```javascript
import { DemoComponent } from './components/demo/demo.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

