import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  firstName: string;
  lastName: string;
  contact: string;

  constructor( private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee(){
    this.employeeService
      .addEmployee(this.firstName, this.lastName, this.contact)
      .subscribe(() => this.router.navigateByUrl(''));
  }
}
