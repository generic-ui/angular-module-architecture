import { NgModule } from '@angular/core';

import { EmployeePageComponent } from './employee-page.component';
import { EmployeePageRoutingModule } from './employee-page.routing-module';
import { EmployeeModule } from '../../domain/employee/employee.module';


@NgModule({
  imports: [
    EmployeeModule,
    EmployeePageRoutingModule
  ],
  declarations: [
    EmployeePageComponent
  ]
})
export class EmployeePageModule {
}
