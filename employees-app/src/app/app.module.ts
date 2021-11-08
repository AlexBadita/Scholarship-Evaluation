import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './manage-employees/employee/employee.component';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './services/employee.service';
import { HomeComponent } from './manage-employees/home/home.component';
import { AddEmployeeComponent } from './manage-employees/add-employee/add-employee.component';
import { MatButtonModule } from '@angular/material/button';
import { AddButtonComponent } from './manage-employees/add-button/add-button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './manage-employees/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    AddEmployeeComponent,
    AddButtonComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
