import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService implements OnInit, OnChanges{

  //baseUrl:string  = "http://localhost:3000/employees/";

  empArray:Employee[] = []

  constructor(private httpClient:HttpClient) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.empArray = this.empArray;
  }

  ngOnInit(): void {
    this.empArray =  [
      {number: 1, name: 'Scott', deptno: 9, job: 'Lead', salary: 1500},
      {number: 2, name: 'Abrons', deptno: 4, job: 'Sales', salary: 1500},
      {number: 3, name: 'James', deptno: 6, job: 'PO', salary: 1500},
      {number: 4, name: 'Adam', deptno: 9, job: 'Lead', salary: 1500},
      {number: 5, name: 'Sathya', deptno: 10, job: 'Manager', salary: 1500},
      {number: 6, name: 'Maneesh', deptno: 2, job: 'Very poor', salary: 1500},
      {number: 7, name: 'Haneesh', deptno: 7, job: 'Programmer', salary: 1500},
      {number: 8, name: 'Maria', deptno: 5, job: 'BA', salary: 1500},
      {number: 9, name: 'Camilla', deptno: 8, job: 'Tester', salary: 1500},
      {number: 10, name: 'Jesus', deptno: 10, job: 'Manager', salary: 1500}
    ]
  }

  // Read All
  getAllEmployees() {
    return this.empArray;
  }

  // Read Single
  getEmployeeById(id:number) : Employee {
    let e = this.empArray.filter((obj) => obj.number === id).at(0) as Employee;
    return e;
  }

  // Create
  addEmployee(empObj:Employee) {
    return this.empArray.push(empObj);
  }

  // Create
  updateEmployee(empObj:Employee) : Employee {
    let emp = this.getEmployeeById(empObj.number);
    emp.name = empObj?.name;
    emp.job = empObj?.job;
    emp.salary = empObj?.salary;
    emp.deptno = empObj?.deptno;

    return emp;
  }
  // Delete 
  deleteEmployee(id:number) {
    let index = this.empArray.findIndex(d => d.number === id);
    this.empArray.splice(index, 1);
  }

}