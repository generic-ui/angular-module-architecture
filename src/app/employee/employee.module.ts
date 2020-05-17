import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './list/employee-list.component';
import { UserComponent } from '../user/user.component';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    EmployeeListComponent,
    // UserComponent
  ],
  exports: [EmployeeListComponent],
  imports: [
    CommonModule,
    UserModule
  ]
})
export class EmployeeModule {
}
