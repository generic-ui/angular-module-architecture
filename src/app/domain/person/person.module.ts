import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonComponent } from './person.component';
import { PersonIdGenerator } from './id/person-id.generator';


@NgModule({
  declarations: [PersonComponent],
  exports: [PersonComponent],
  imports: [CommonModule],
  providers: [PersonIdGenerator]
})
export class PersonModule {
}
