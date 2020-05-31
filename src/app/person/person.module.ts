import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';



@NgModule({
  declarations: [PersonComponent],
  exports: [PersonComponent],
  imports: [
    CommonModule
  ]
})
export class PersonModule { }
