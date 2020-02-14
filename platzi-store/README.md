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

```javascript
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
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
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
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

## 16.- Usando routerLink y routerActive

Para navegar entre pages se ocupa **routerLink**. Mientras que **routerActive** es una propiedad que toma un Link cuando estas sobre el.

**header**

```html
<nav>
  <a routerLink="/home" routerLinkActive="active">Home</a>
  <a routerLink="/products" routerLinkActive="active">Products</a>
  <a routerLink="/contact" routerLinkActive="active">Contact</a>
</nav>
```

**Envio de parametros en routerlink** `Notacion URL/parametro`

```
<a [routerLink]="[ '/products', product.id ]">Ver detalle</a>
```



## 17.- Servicios

Los servicios son la capa encargada de proveer datos. Y estos deben ser asignados por inyección de dependencia.

```javascript
import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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
  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
```



```javascript
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
```

**Notas:**

- El Service deben ser inyectado como dependencias a los componentes que los utilizaran.

- Se ocupa **ActivedRoute** para manejar parámetros en la URL.

- El método **subscribe**, escucha los cambios que se hacen en los parámetros de la URL indicada por el **ActivetedRoute**.

  

## 18.- Vistas anidadas

Para esto se genera un Layout el cual va a llevar la siguiente estructura por lo general.

**Layout.html**

```
<app-header></app-header>

<router-outlet></router-outlet>

<app-footer></app-footer>
```

**Routing**

Se aplica que el componente Layout va a tener hijos y esos hijos van a ser los renderizados del outlet.

```javascript
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
```

## 19.- Implementación del Lazy Loading

Es modularizar los componentes de tal forma que solo se cargara lo necesario para hacer mas baja la carga.

```javascript
import { LayoutComponent } from './components/layout/layout.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DemoComponent } from './components/demo/demo.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule , PreloadAllModules} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
        // component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

**Notas:**

- Se modularizo home y el routing de ese mismo se especifico que el `/` renderizaría el HomeComponent.
- Dentro del routing generar se renderiza dinámicamente todo el modulo con una función.
- Es importante especificar que el modulo de home utilice el CommonModule.

## 20.- Creando un shared module y core module



### Shared Module

El **shared module** guarda todos los recursos compartidos. Guarda componentes, directivas y pipes.

Para utilizarlo el componente que lo quiere ocupar debe importar el **Shared Module** (**import y declaración en imports**)  

**Notas:**

- Existen un elemento llamado `exports:[]` en el cual se deben referenciar los componentes, directivas o pipes que deseamos que se compartan con los demás componentes.
- Al ocupar módulos en componentes del shared es importante importar también en este mismo.



### Core Module

Segmenta componentes si solo se van a compartir alrededor de toda la aplicación. Es decir por defecto va a estar en todos los módulos. Sirve para guardar servicios que tengan una sola referencia de los datos.

En el van por defecto los servicios. Y se importa en el **app.module**

**Notas:**

- Existen un elemento llamado `providers:[]` en el cual se deben referenciar los servicios.



## 21.- Guardianes



Angular brinda guardianes para saber quien puede entrar en una ruta en especifico.

**Crear guardián con cli**

```
ng g g admin
```

Se crea este guardián y se especifica dentro del routing de la siguiente forma.

```
 {
        path: 'contact',
        canActivate: [AdminGuard],
        component: ContactComponent
      }
```

## 22.- Implementar Material

**Instalación**

Se instala y configura en el proyecto solo.

```
ng add @angular/material
```



### Ocupar

Se debe crear un modulo compartido



**Notas:**

- **HammerJs** es una libreria para poder hacer reconocimiento del touch.

- **browser animations** animaciones de transiciones de material.

  