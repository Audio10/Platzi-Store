import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProducctFormComponent } from './components/producct-form/producct-form.component';
import { NavComponent } from './components/nav/nav.component';


import { TableComponent } from './components/table/table.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';



@NgModule({
  declarations: [ProducctFormComponent, NavComponent, TableComponent, DashboardComponent, ProductsListComponent, FormProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
