import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './list/customer-list.component';


@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule
  ]
})
export class CustomerModule {
}
