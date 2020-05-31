import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonComponent implements OnInit {

  @Input()
  person: any;

  constructor() { }

  ngOnInit(): void {
  }

}
