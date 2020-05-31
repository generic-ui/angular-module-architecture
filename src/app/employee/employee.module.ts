import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuiListModule } from '@generic-ui/ngx-list';

import { EmployeeListComponent } from './list/employee-list.component';
import { PersonModule } from '../person/person.module';


@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  exports: [EmployeeListComponent],
  imports: [
    CommonModule,
    PersonModule,
    GuiListModule
  ]
})
export class EmployeeModule {
}
