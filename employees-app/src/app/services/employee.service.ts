import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService {

  readonly baseUrl= "https://localhost:44368";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseUrl + '/employee', this.httpOptions);
  }

  addEmployee(firstName: string, lastName: string, contact: string): Observable<Employee>{
    let employee: Employee = {
      firstName: firstName,
      lastName: lastName,
      contact: contact
    }

    return this.httpClient.post<Employee>(this.baseUrl + "/employee", employee, this.httpOptions);
  }

  deleteEmployee(id: string){
    return this.httpClient.delete(this.baseUrl + "/employee/" + id);
  }

  getEmployeeById(id: string){
    return this.httpClient.get<Employee>(this.baseUrl + '/employee/' + id);
  }

  updateEmployee(id: string, firstName: string, lastName: string, contact: string){
    let employee: Employee = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      contact: contact
    }
    return this.httpClient.put<Employee>(this.baseUrl + '/employee/' + id, employee, this.httpOptions);
  }
}
