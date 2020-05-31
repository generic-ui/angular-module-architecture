import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  source = ['customer'];

  customers$;

  constructor(private readonly customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customers$ = this.customerService.onCustomers();
  }

}
