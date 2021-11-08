import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  id: string;
  firstName: string;
  lastName: string;
  contact: string;

  constructor(private _activatedRoute: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(parameter => {
      this.id = parameter.id;
    })

    this.employeeService.getEmployeeById(this.id).subscribe(result => {
      this.firstName = result.firstName;
      this.lastName = result.lastName;
      this.contact = result.contact;
    });
  }

  editEmployee(): void{
    this.employeeService.updateEmployee(this.id, this.firstName, this.lastName, this.contact).subscribe();
  }
}
