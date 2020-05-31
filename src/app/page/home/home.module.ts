import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing-module';

import { CustomerModule } from '../../domain/customer/customer.module';
import { EmployeeModule } from '../../domain/employee/employee.module';


@NgModule({
  imports: [
    CustomerModule,
    EmployeeModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
