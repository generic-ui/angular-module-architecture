import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonComponent } from './person.component';
import { PersonIdGenerator } from './id/person-id.generator';
import { GeneratorModule } from '../generator/generator.module';


@NgModule({
  declarations: [PersonComponent],
  exports: [PersonComponent],
  imports: [CommonModule]
})
export class PersonModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PersonModule,
      providers: [PersonIdGenerator]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: PersonModule,
      providers: []
    };
  }

  constructor(generatorModule: GeneratorModule) {}
}
