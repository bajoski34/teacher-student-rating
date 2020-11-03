import { Component, OnInit } from '@angular/core';
import { BaseApiService } from 'src/app/services/base-api.service';
import { SkeletonService } from 'src/app/services/skeleton.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-student-rating-overview',
  templateUrl: './student-rating-overview.component.html',
  styleUrls: ['./student-rating-overview.component.scss']
})
export class StudentRatingOverviewComponent implements OnInit {
  visible: boolean = false;
  selectedcourse: any = [];
  courses: any = [];
  visibleAnimate: boolean = false;
  validator_toast:any ={
    isSubmited: false,
    success:false,
    message: ''
  };
  message: any = '';
  submitLoader:boolean = false;
  index: any = '';
  params: any = null;
  constructor(private BaseApi: BaseApiService,
              private SkeletonService: SkeletonService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.BaseApi.getAllCourses().subscribe(data=>{this.courses = data;});
  }

}
