import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const employees = [
  {
    name: 'Mable Bryant',
    position: 'Brand Manager'
  },
  {
    name: 'Isaac Patterson',
    position: 'Officer'
  },
  {
    name: 'Renata Diaz',
    position: 'Program Manager'
  },
  {
    name: 'Bert Peterson',
    position: 'Copywriter'
  },
  {
    name: 'Ed Garza',
    position: 'Media Buyer'
  },
  {
    name: 'Alice Hanson',
    position: 'Plumber'
  },
  {
    name: 'Noah Watson',
    position: 'Office Clerk'
  },
  {
    name: 'Peter Medina',
    position: 'Brand Strategist'
  },
  {
    name: 'Stephen Tucker',
    position: 'Account Collector'
  },
  {
    name: 'Rain Cunningham',
    position: 'Supervisor'
  }
];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {
  }

  onEmployees(): Observable<Array<any>> {
    return of(employees);
  }
}
