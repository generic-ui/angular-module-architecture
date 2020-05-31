import { Injectable } from '@angular/core';

@Injectable()
export class IdGenerator {

  private index = 0;

  generate(): number {
    return this.index++;
  }

}
