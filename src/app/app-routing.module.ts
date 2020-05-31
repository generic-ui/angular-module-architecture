import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'customers', loadChildren: () => import('./pages/customer/customer-page.module').then(m => m.CustomerPageModule) },
  { path: 'employees', loadChildren: () => import('./pages/employee/employee-page.module').then(m => m.EmployeePageModule) },


  { path: '**', redirectTo: 'home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
