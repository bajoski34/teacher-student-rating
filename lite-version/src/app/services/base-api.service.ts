import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  private deployment:string = 'https://www.deployment-url.com';
  private local:string = 'http://127.0.0.1:8000/api';
  private baseUrl:string = this.local;
  constructor(private http: HttpClient, private Auth: AuthenticationService) { }
  getAllDepartments(){
    return this.http.get(`${this.baseUrl}/get-all-department`);
  }
  getAllTeachers(){
    return this.http.get(`${this.baseUrl}/get-all-teachers`);
  }
  getDepartmentTeachers(id, type){
    return this.http.get(`${this.baseUrl}/get-department-teachers/student/user=${id}/type=${type}`);
  }
  getDepartmentRatedTeachers(id, type){
    return this.http.get(`${this.baseUrl}/get-department-rated-teachers/student/user=${id}/type=${type}`);
  }
  getAllStudents(){
    return this.http.get(`${this.baseUrl}/get-all-student`);
  }
  getDepartmentStudents(id){
    return this.http.get(`${this.baseUrl}/get-department-student/user=${id}`);
  }
  getCourseInfo(id){
    return this.http.get(`${this.baseUrl}/get-course-info/${id}`);
  }
  addTeacher(data){
    return this.http.post(`${this.baseUrl}/add-new-teacher`, data);
  }
  addStudent(data){
    return this.http.post(`${this.baseUrl}/add-new-student`, data);
  }
  addDepartment(data){
    return this.http.post(`${this.baseUrl}/add-new-department`, data);
  }
  addNewCourse(data){
    return this.http.post(`${this.baseUrl}/add-new-course`, data);
  }
  deleteDepartment(data){
    return this.http.post(`${this.baseUrl}/delete-department`, data);
  }
  enableDisableRating(data){
    return this.http.post(`${this.baseUrl}/enable-disable-rating`, data);
  }
  enableAll(){
    return this.http.get(`${this.baseUrl}/enable-all-rating`);
  }
  disableAll(){
    return this.http.get(`${this.baseUrl}/disable-all-rating`);
  }
  getAllCourses(){
    return this.http.get(`${this.baseUrl}/get-all-course`);
  }
  updateCourse(data){
    return this.http.post(`${this.baseUrl}/update-course`, data);
  }
  enrollForCourse(data){
    return this.http.post(`${this.baseUrl}/enroll-course`, data);
  }
  unEnrollForCourse(data){
    return this.http.post(`${this.baseUrl}/un-enroll-course`, data);
  }
  getEnrolledCourses(id){
    return this.http.get(`${this.baseUrl}/get-enrolled-course/${id}`);
  }
  getAllQuestionAndSection(){
    return this.http.get(`${this.baseUrl}/get-evaluation-questions`);
  }
  postSectionQuestionRating(student_id, teacher_id, data){
    return this.http.post(`${this.baseUrl}/rate-teacher/${student_id}/ ${teacher_id}`, data);
  }
  hasRatedCourse(data){
    return this.http.post(`${this.baseUrl}/finish-rating-course`, data);
  }
  getTeachersAssessment(id){
    return this.http.get(`${this.baseUrl}/get-teachers-assessment/${id}`);
  }
  getTeachersAssessmentWithTeacherId(id){
    return this.http.get(`${this.baseUrl}/get-teachers-assessment-with-teacher-id/${id}`);
  }
  getTeacherInfo(id){
    return this.http.get(`${this.baseUrl}/get-teacher-info/${id}`);
  }
}
