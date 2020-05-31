import { NgModule } from '@angular/core';
import { EmployeePageComponent } from './employee-page.component';
import { RouterModule } from '@angular/router';

const routes = [{
  path: '',
  component: EmployeePageComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EmployeePageRoutingModule {
}
