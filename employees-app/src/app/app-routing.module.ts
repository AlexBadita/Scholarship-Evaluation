import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './manage-employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './manage-employees/edit-employee/edit-employee.component';
import { HomeComponent } from './manage-employees/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent,  pathMatch: "full" },
  {path: "addemployee", component: AddEmployeeComponent},
  {path: "editemployee/:id", component: EditEmployeeComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
