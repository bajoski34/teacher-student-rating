import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { BaseApiService } from './../../../services/base-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  validator_toast:any ={
    isSubmited: false,
    success:false,
    message: ''
  };
  addCourseForm: FormGroup;
  images: any = [];
  message: any = '';
  teachers: any = [];
  departments:any = [];
  submitLoader:boolean = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private BaseApi:BaseApiService) { }

    ngOnInit() {
      this.teachers = this.BaseApi.getAllTeachers();
      this.departments = this.BaseApi.getAllDepartments();
      this.addCourseForm = this.formBuilder.group({
        name: ['', Validators.required],
        teacher_id: ['', Validators.required],
        department_id: ['', Validators.required]
      });
    }
    validator(){
      return this.addCourseForm.controls;
    }
    onSubmitAddCourse(){
      this.validator_toast.isSubmited = true;
      this.message = '';
      if(this.validator().name.invalid || this.validator().teacher_id.invalid || this.validator().department_id.invalid){ return;}
      this.onSubmitLoader(true);
      let formData = new FormData();
      formData.append('name', this.validator().name.value);
      if(this.validator().teacher_id.value !== 'null'){
        formData.append('teacher_id', this.validator().teacher_id.value);
      }
      formData.append('department_id', this.validator().department_id.value);
      this.BaseApi.addNewCourse(formData).subscribe(data=>{
        this.validator_toast.success =true;
        this.validator_toast.message =data;
        this.onSubmitLoader(false);
      });
    }
    onSubmitLoader(state) {
      this.submitLoader = state;
    }
    resetFormField(){
      this.addCourseForm.reset();
      this.images = [];
      this.validator_toast.isSubmited = false;
      this.validator_toast.success = false;
      this.validator_toast.message = '';
    }
    viewCourseList(value){
      return value ? this.router.navigate(['authenticated/view-department-list']) : this.router.navigate(['authenticated/add-new-department']);
    }
}
