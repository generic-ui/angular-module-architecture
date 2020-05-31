import { NgModule } from '@angular/core';

import { CustomerPageComponent } from './customer-page.component';
import { CustomerPageRoutingModule } from './customer-page.routing-module';

import { CustomerModule } from '../../domain/customer/customer.module';
import { PersonModule } from '../../domain/person/person.module';


@NgModule({
  imports: [
    CustomerModule,
    CustomerPageRoutingModule,
  ],
  exports: [
  ],
  declarations: [
    CustomerPageComponent
  ]
})
export class CustomerPageModule {
}
