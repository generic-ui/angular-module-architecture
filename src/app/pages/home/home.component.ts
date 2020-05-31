import { Component } from '@angular/core';

@Component({
  template: `
	  <div class="container">

		  <div class="row">
			  <app-customer-list class="col-sm-6 "></app-customer-list>

			  <app-employee-list class="col-sm-6 "></app-employee-list>
		  </div>

	  </div>
  `
})
export class HomeComponent {}
