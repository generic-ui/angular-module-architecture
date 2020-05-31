import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './domain/customer/customer.module';
import { EmployeeListComponent } from './domain/employee/list/employee-list.component';
import { EmployeeModule } from './domain/employee/employee.module';
import { PersonModule } from './domain/person/person.module';
import { GeneratorModule } from './domain/generator/generator.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonModule.forRoot(),
    GeneratorModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
