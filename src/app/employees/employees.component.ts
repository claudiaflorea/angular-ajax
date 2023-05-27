import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../models/Employee';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnChanges {
  
  empForm: FormGroup;

  number: number = 0;
  name: string = '';
  job: string = '';
  deptno: number = 0;
  salary: number = 0;
  
  employeesArray:Employee[]= [];

  constructor(private empService:EmpService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.empForm = this.formBuilder.group({
      number: ['', []],
      name: ['', []],
      job: ['', []],
      salary: [0, []],
      deptno: [0, []]
    });

    this.employeesArray = [
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
  ngOnChanges(changes: SimpleChanges): void {
    this.employeesArray  = this.employeesArray;
  }

  getData_click() {
    this.empService.getAllEmployees();
  }

  addData_click() {

    let empObj:Employee = new Employee();
    empObj.number =  this.empForm.value.number;
    empObj.name =  this.empForm.value.name;
    empObj.job =  this.empForm.value.job;
    empObj.salary =  this.empForm.value.salary;
    empObj.deptno =  this.empForm.value.deptno;

    this.empService.addEmployee(empObj);
    this.clearFields();
      
  }

  updateData_click() {
    let empObj:Employee = new Employee();
    empObj.number  = this.empForm.value.number;
    empObj.name = this.empForm.value.name;
    empObj.job = this.empForm.value.job;
    empObj.salary = this.empForm.value.salary;
    empObj.deptno = this.empForm.value.deptno;

    this.empService.updateEmployee(empObj);
    this.clearFields();
  }

  deleteData_click(id:number) {
    this.empService.deleteEmployee(id);
  }

  selectData_click(id:number) {    
    this.empService.getEmployeeById(id);
  }

  clearFields() {
    this.number = 0;
    this.name = "";
    this.job = "";
    this.salary = 0;
    this.deptno = 0;
  }
}
