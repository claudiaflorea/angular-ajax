import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './models/Student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl:string  = "http://localhost:3000/students/";

  constructor(private httpClient:HttpClient) { }

  // Read All
  getAllStudents():Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseUrl);
  }

  // Read Single
  getStudentById(id:number):Observable<Student> {
    return this.httpClient.get<Student>(this.baseUrl + id);
  }

  // Create
  addStudent(studentObj:Student):Observable<Student> {
    return this.httpClient.post<Student>(this.baseUrl, studentObj);
  }

  // Create
  updateStudent(studentObj:Student):Observable<Student> {
    let id  = studentObj.studentId;
    return this.httpClient.put<Student>(this.baseUrl + id, studentObj);
  }
  // Delete 
  deleteStudent(id:number):Observable<Student> {
    return this.httpClient.delete<Student>(this.baseUrl + id);
  }

  // ----------------------------------------- 


  getStudentsByCity(cityName:string):Observable<Student[]> {   
    let httpParams:HttpParams = new HttpParams();
    httpParams =  httpParams.set("city",cityName); 
    return this.httpClient.get<Student[]>(this.baseUrl, {params : httpParams});
  }

  getStudentsWithToken() : Observable<Student[]> {
    const hardcodedToken = '1d38d128-0671-4121-8084-f6332a992a40';
   //  const hardcodedToken = localStorage.getItem("AUTH_TOKEN");
    const header = { 'Authorization' : `Bearer ${hardcodedToken}`};
    return this.httpClient.get<Student[]>(this.baseUrl, { headers: header});
  } 
}