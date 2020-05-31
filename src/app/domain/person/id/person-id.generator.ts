import { Injectable } from '@angular/core';
import { IdGenerator } from '../../generator/id.generator';

@Injectable()
export class PersonIdGenerator {

  constructor(private readonly idGenerator: IdGenerator) {}

  generate(): number {
    return this.idGenerator.generate();
  }

}
