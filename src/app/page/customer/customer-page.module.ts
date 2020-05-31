import { NgModule } from '@angular/core';

import { CustomerPageComponent } from './customer-page.component';
import { CustomerPageRoutingModule } from './customer-page.routing-module';

import { CustomerModule } from '../../domain/customer/customer.module';


@NgModule({
  imports: [
    CustomerModule,
    CustomerPageRoutingModule
  ],
  declarations: [
    CustomerPageComponent
  ]
})
export class CustomerPageModule {
}
