import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { BaseApiService } from 'src/app/services/base-api.service';
import { SkeletonService } from 'src/app/services/skeleton.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-department-student',
  templateUrl: './department-student.component.html',
  styleUrls: ['./department-student.component.scss']
})
export class DepartmentStudentComponent implements OnInit {
  students: any = [];
  visible: boolean = false;
  departments: any = [];
  visibleAnimate: boolean = false;
  validator_toast:any ={
    isSubmited: false,
    success:false,
    message: ''
  };
  images: any = [];
  message: any = '';
  submitLoader:boolean = false;
  user: any;
  constructor(private BaseApi: BaseApiService,
              private SkeletonService: SkeletonService,
              private auth: AuthenticationService) { }

  ngOnInit() {
    this.user = this.auth.getUser()['user'];
    this.BaseApi.getDepartmentStudents(this.user.id).subscribe(data=>{
      console.log(data);
      this.students = data;
    })
  }
  fetchPictures(image){
    return this.SkeletonService.getStudentPictures(image);
  }
}
