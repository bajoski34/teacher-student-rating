import { AuthenticationService } from './../../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BaseApiService } from 'src/app/services/base-api.service';
import { SkeletonService } from 'src/app/services/skeleton.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-view-rated-teacher',
  templateUrl: './view-rated-teacher.component.html',
  styleUrls: ['./view-rated-teacher.component.scss']
})
export class ViewRatedTeacherComponent implements OnInit {
  teachers: any = [];
  visible: boolean = false;
  selectedTeacher: any = [];
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
    this.BaseApi.getDepartmentRatedTeachers(this.user.id, 'student').pipe(catchError(err=>of(console.log(err)))).subscribe(data=>{
      this.teachers = data;
      console.log(data);
    });
  }
  fetchPictures(image){
    return this.SkeletonService.getTeacherPictures(image);
  }
}
