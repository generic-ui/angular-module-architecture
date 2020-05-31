import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { PersonIdGenerator } from './id/person-id.generator';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonComponent implements OnInit {

  @Input()
  person: any;

  id: number;

  constructor(private readonly personIdGenerator: PersonIdGenerator) {
    this.id = personIdGenerator.generate();
  }

  ngOnInit(): void {
  }

}
