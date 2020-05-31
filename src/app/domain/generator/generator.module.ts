import { NgModule } from '@angular/core';
import { IdGenerator } from './id.generator';

@NgModule({
  providers: [
    IdGenerator
  ],
})
export class GeneratorModule {
}
