import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GuiListModule } from '@generic-ui/ngx-list';

import { CustomerListComponent } from './list/customer-list.component';
import { PersonModule } from '../person/person.module';


@NgModule({
  declarations: [
    CustomerListComponent,
  ],
  exports: [CustomerListComponent],
  imports: [
    CommonModule,
    PersonModule,
    GuiListModule
  ]
})
export class CustomerModule {
}
