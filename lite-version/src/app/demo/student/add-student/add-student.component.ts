import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { BaseApiService } from './../../../services/base-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  departments:any = [];
  validator_toast:any ={
    isSubmited: false,
    success:false,
    message: ''
  };
  addStudentForm: FormGroup;
  images: any = [];
  message: any = '';
  submitLoader:boolean = false;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private BaseApi:BaseApiService) { }

  ngOnInit() {
    this.addStudentForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      gender: ['', Validators.required]
    });
    this.departments = this.BaseApi.getAllDepartments();
  }
  validator(){
    return this.addStudentForm.controls;
  }
  handleFileInput(event) {
    if(event.target.files.length){
      if(event.target.files[0].size > 4814501){
        this.message = `image size too large. image must be less than 5 mb`;
        return;
      }
      this.images = [];
      this.images.push(<File>event.target.files[0]);
    }
  }
  onSubmitAddStudent(){
    this.validator_toast.isSubmited = true;
    if(this.validator().first_name.invalid || this.validator().last_name.invalid
        || this.validator().email.invalid || this.validator().department.invalid
        || this.validator().gender.invalid || this.images.length == 0){
          return;
    }
    this.onSubmitLoader(true);
    let formData = new FormData();
    formData.append('first_name', this.validator().first_name.value);
    formData.append('last_name', this.validator().last_name.value);
    formData.append('email', this.validator().email.value);
    formData.append('department', this.validator().department.value);
    formData.append('gender', this.validator().gender.value);
    formData.append('image', this.validator().gender.value);
    formData.append('image[]', this.images[0], this.images[0].name)
    this.BaseApi.addStudent(formData).subscribe(data=>{
      if(data['status']=='200'){
        this.validator_toast.success =true;
        this.validator_toast.message =data['response'];
      }else{
        this.onSubmitLoader(false);
      }
    });
  }
  onSubmitLoader(state) {
    this.submitLoader = state;
  }
  resetFormField(){
    this.addStudentForm.reset();
    this.images = [];
    this.validator_toast.isSubmited = false;
    this.validator_toast.success = false;
  }
  viewTeachersList(){
    return this.router.navigate(['authenticated/view-student-list']);
  }
}
