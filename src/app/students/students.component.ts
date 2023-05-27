import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../models/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, OnChanges {

  name:string  = "";
  city:string  = "";
  email:string  = "";
  age:number = 0;
  studentId:number = 0;

  studentsArray:Student[]= [];

  constructor(private dataService:DataService){}

  ngOnChanges(changes: SimpleChanges): void {
    this.studentsArray = this.studentsArray;
  }

  ngOnInit(): void {
    this.studentsArray = [
      {studentId: 1, name: 'Scott', city: 'NY', email: 'scott@gmail.com', age: 21},
      {studentId: 2, name: 'Abrons', city: 'LA', email: 'abrons@gmail.com', age: 22},
      {studentId: 3, name: 'James', city: 'NY', email: 'james@gmail.com', age: 23},
      {studentId: 4, name: 'Adam', city: 'NY', email: 'adam@gmail.com', age: 19},
      {studentId: 5, name: 'Sathya', city: 'LA', email: 'sathyya@gmail.com', age: 20},
      {studentId: 6, name: 'Maneesh', city: 'NY', email: 'maneesh@gmail.com', age: 21},
      {studentId: 7, name: 'Haneesh', city: 'NY', email: 'haneesh@gmail.com', age: 22},
      {studentId: 8, name: 'Maria', city: 'LA', email: 'maria@gmail.com', age: 22},
      {studentId: 9, name: 'Camilla', city: 'NY', email: 'camilla@gmail.com', age: 19},
      {studentId: 10, name: 'Jesus', city: 'LA', email: 'jesus@gmail.com', age: 23}
    ]
  }


  getData_click() {
      this.dataService.getAllStudents().subscribe((resData:Student[]) => {
        this.studentsArray = resData;
      });
  }

  addData_click() {

    let stObj:Student = new Student();
    stObj.studentId = 0;
    stObj.name = this.name;
    stObj.city = this.city;
    stObj.email = this.email;
    stObj.age = this.age;

      this.dataService.addStudent(stObj).subscribe((resData:Student) =>
      {
          alert("New Student details are added to database");
          this.getData_click();
          this.clearFields();
      });
  }

 updateData_click() {
    let stObj:Student = new Student();
    stObj.studentId = this.studentId;
    stObj.name = this.name;
    stObj.city = this.city;
    stObj.email = this.email;
    stObj.age = this.age;

      this.dataService.updateStudent(stObj).subscribe((resData:Student) =>
      {
          alert("Student details are updated to database");
          this.getData_click();
          this.clearFields();
      });
  }

  deleteData_click(id:number) {
      this.dataService.deleteStudent(id).subscribe((resData:Student) =>
      {
         alert("Student details are deleted from database");
          this.getData_click();
      });
  }
  
  selectData_click(id:number) {
    this.studentId = id;
    
    this.dataService.getStudentById(id).subscribe( (resData:Student) =>
    {
      this.name = resData.name;
      this.email = resData.email;
      this.city = resData.city;
      this.age = resData.age;
    });
  }

  clearFields() {
    this.name = "";
    this.email = "";
    this.city = "";
    this.age = 0;
  }

}
