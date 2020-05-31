import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees$;

  constructor(private readonly employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees$ = this.employeeService.onEmployees();
  }

}
