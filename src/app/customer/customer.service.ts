import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


const customers = [
  {
    name: 'Mark Ross',
    company: 'Genco Pura Olive Oil Company',
    position: 'Team Leader'
  },
  {
    name: 'Concepción King',
    company: 'Globex Corporation',
    position: 'Carpenter'
  },
  {
    name: 'Vanecia Green',
    company: 'Soylent Corp',
    position: 'Painter'
  },
  {
    name: 'Samara Anderson',
    company: 'Initech',
    position: 'Electrician'
  },
  {
    name: 'Maxine Hamilton',
    company: 'Gekko & Co',
    position: 'SEO Manager'
  },
  {
    name: 'Dan Lee',
    company: 'Sterling Cooper',
    position: 'Director'
  },
  {
    name: 'Paul Long',
    company: 'Hooli',
    position: 'Web Developer'
  },
  {
    name: 'Madonna Snyder',
    company: 'Vehement Capital Partners',
    position: 'Product Manager'
  },
  {
    name: 'Oriole Perkins',
    company: 'Massive Dynamic',
    position: 'Public Relations'
  },
  {
    name: 'Ernest Jordan',
    company: 'Wonka Industries',
    position: 'Copywriter'
  }
];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {
  }

  onCustomers(): Observable<Array<any>> {
    return of(customers);
  }
}
