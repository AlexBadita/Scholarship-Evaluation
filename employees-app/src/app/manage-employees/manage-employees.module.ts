import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    AddButtonComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManageEmployeesModule { }
