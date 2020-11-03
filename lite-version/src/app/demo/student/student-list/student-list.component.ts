import { Component, OnInit } from '@angular/core';
import { BaseApiService } from 'src/app/services/base-api.service';
import { SkeletonService } from 'src/app/services/skeleton.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: any = [];
  visible: boolean = false;
  selectedStudent: any = [];
  departments: any = [];
  visibleAnimate: boolean = false;
  updateStudentForm: FormGroup;
  validator_toast:any ={
    isSubmited: false,
    success:false,
    message: ''
  };
  images: any = [];
  message: any = '';
  submitLoader:boolean = false;
  constructor(private BaseApi: BaseApiService,
              private SkeletonService: SkeletonService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.students = this.BaseApi.getAllStudents();
    this.updateStudentForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      gender: ['', Validators.required]
    });
    this.departments = this.BaseApi.getAllDepartments();
  }
  validator(){
    return this.updateStudentForm.controls;
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
  fetchPictures(image){
    return this.SkeletonService.getStudentPictures(image);
  }
  onSubmitUpdateStudent(){
  }
  editItem(data){
    this.selectedStudent = data;
  }
}
