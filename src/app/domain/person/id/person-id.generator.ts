import { Injectable } from '@angular/core';

@Injectable()
export class PersonIdGenerator {

  private index = 0;

  generate(): number {
    return this.index++;
  }

}
