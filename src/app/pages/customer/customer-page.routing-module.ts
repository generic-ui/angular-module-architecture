import { NgModule } from '@angular/core';
import { CustomerPageComponent } from './customer-page.component';
import { RouterModule } from '@angular/router';

const routes = [{
  path: '',
  component: CustomerPageComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CustomerPageRoutingModule {
}
