# PlatziStore

Bienvenido al curso de Angular con platzi este es un manual de todo lo aprendido en el curso.

## 1.- Data binging en Angular.

Para demostrar esta funcionalidad se ocupa **ngModel** la cual es una directiva para asociar el modelo de datos con el template.

**Template**

```javascript
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

```
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

