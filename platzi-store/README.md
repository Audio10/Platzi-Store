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

