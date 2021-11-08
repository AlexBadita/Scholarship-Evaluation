import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void{
    this.employeeService.getEmployees().subscribe(result => {
      this.employees = result;
    })
  }

  deleteEmployee(id: string): void{
    this.employeeService.deleteEmployee(id).subscribe(() => this.getEmployees());
  }

  editEmployee(id: string){
    this.router.navigateByUrl('/editemployee/' + id);
  }
}
