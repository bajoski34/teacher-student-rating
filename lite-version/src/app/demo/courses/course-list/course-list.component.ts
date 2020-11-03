import { AuthenticationService } from './../../../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BaseApiService } from 'src/app/services/base-api.service';
import { SkeletonService } from 'src/app/services/skeleton.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  visible: boolean = false;
  selectedcourse: any = [];
  listOfCoursesToEnroll: any = [];
  listOfCoursesToUnEnroll: any = [];
  courses: any = [];
  visibleAnimate: boolean = false;
  updateCourseForm: FormGroup;
  validator_toast:any ={isSubmited: false,success:false,message: ''};
  message: any = '';
  suc_message: any = '';
  teachers: any = [];
  departments:any = [];
  submitLoader:boolean = false;
  index: any = '';
  params: any = null;
  user: any = [];
  isCheckedAll: boolean = false;
  constructor(private BaseApi: BaseApiService,
              private SkeletonService: SkeletonService,
              private formBuilder: FormBuilder,
              private Router: Router,
              private ActivatedRoute: ActivatedRoute,
              private AuthenticationService:AuthenticationService) { }

  ngOnInit() {
  this.teachers = this.BaseApi.getAllTeachers();
  this.departments = this.BaseApi.getAllDepartments();
  this.user = this.AuthenticationService.getUser();
  this.ActivatedRoute.paramMap.subscribe(params => {
    if(params['params']['id']){
      this.params = params['params']['id'];
      this.BaseApi.getEnrolledCourses(this.params).subscribe(data=>{
        if(data['status'] == '200'){
          this.courses = data['data'];
        }else{
          this.courses = [];
        }
      });
    }else{
      this.BaseApi.getAllCourses().subscribe(data=>{this.courses = data;});
    }
  })
  this.updateCourseForm = this.formBuilder.group({
      name: ['', Validators.required],
      teacher_id: ['', Validators.required],
      department_id: ['', Validators.required],
      course_code: ['', Validators.required]
    });
  }
  validator(){return this.updateCourseForm.controls;}
  editItem(data, index){
    this.selectedcourse = data; this.index = index;
    this.validator().name.setValue(data['course']['name']);
    this.validator().teacher_id.setValue(data['teacher']['id']);
    this.validator().department_id.setValue(data['department']['id']);
    this.validator().course_code.setValue(data['course']['course_code']);
  }
  onSubmitUpdateCourse(){
    let formData = new FormData();
    formData.append('name', this.validator().name.value);
    formData.append('department_id', this.validator().department_id.value);
    if(this.validator().teacher_id.value){
      formData.append('teacher_id', this.validator().teacher_id.value);
    }
    formData.append('course_code', this.validator().course_code.value)
    this.BaseApi.updateCourse(formData).subscribe( data=>{
      let index = this.courses.findIndex(x=>x['course']['course_code'] == this.selectedcourse['course']['course_code']);
      this.courses[index] = data['data'];
      this.message = data['response'];
    });
  }
  reviewAssessment(teacher){
    if(teacher.length < 1){
      console.log('hii');
    }
  }
  onSubmitDeleteCourse(){}
  fetchEnrolledCourses(id){}
  selectedToEnroll(course){
    let index = this.listOfCoursesToEnroll.findIndex(x => x.course_code == course.course_code);
    if(index < 0){
      this.listOfCoursesToEnroll.push(course);
      this.listOfCoursesToEnroll.push(course);
    }else{
      this.listOfCoursesToEnroll.splice(index,1);
    }
  }
  selectedToUnEnroll(course){
    let index = this.listOfCoursesToUnEnroll.findIndex(x => x.course_code == course.course_code);
    if(index < 0){
      this.listOfCoursesToUnEnroll.push(course);
    }else{
      this.listOfCoursesToUnEnroll.splice(index,1);
    }
  }
  enrollCourse(){
    let obj = { user_id: this.user['user']['id'], courses: this.listOfCoursesToEnroll };
    this.submitLoader = true;
    this.BaseApi.enrollForCourse(obj).subscribe(data=>{
      if(data['status'] == '200'){
        this.listOfCoursesToEnroll = [];
        document.getElementsByClassName('ap')['checked'] = false;
        this.submitLoader = false;
        this.suc_message = data['response'];
        setTimeout(()=>{ this.suc_message = ''; }, 2000)
      }
    });
  }
  unenrollCourse(){
    let obj = { user_id: this.user['user']['id'], courses: this.listOfCoursesToUnEnroll };
    this.submitLoader = true;
    this.BaseApi.unEnrollForCourse(obj).subscribe(data=>{
      if(data['status'] == '200'){
        this.listOfCoursesToUnEnroll = [];
        document.getElementsByClassName('uap')['checked'] = false;
        this.submitLoader = false;
        this.suc_message = data['response'];
        setTimeout(()=>{ this.suc_message = ''; window.location.reload(); }, 1000)
      }
    });
  }
  checkUncheckAll(state){
    let checkboxes = document.getElementsByName('cxbox');
    for(let i = 0; i< checkboxes.length;i++){
      checkboxes[i]['checked'] = state;
      if(i<this.courses.length){
        if(this.params){
          if(this.courses[i].info.is_rated == 0){
            state ? this.selectedToUnEnroll(this.courses[i].course) :  this.listOfCoursesToUnEnroll = [];
          }
        }else{
          state ? this.selectedToEnroll(this.courses[i].course) : this.listOfCoursesToEnroll = [];
        }
      }
    }
    state ? this.listOfCoursesToUnEnroll = [] : this.listOfCoursesToEnroll = [];
    this.isCheckedAll = !this.isCheckedAll;
  }
  rateTeacher(course){
    return this.Router.navigate(['/authenticated/rate-teacher/', course['course']['course_code']]);
  }
}
