import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { BaseApiService } from './../../../services/base-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  validator_toast:any ={
    isSubmited: false,
    success:false,
    message: ''
  };
  addDepartmentForm: FormGroup;
  images: any = [];
  message: any = '';
  submitLoader:boolean = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private BaseApi:BaseApiService) { }

  ngOnInit() {
    this.addDepartmentForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
  validator(){
    return this.addDepartmentForm.controls;
  }
  onSubmitAddDepartment(){
    this.validator_toast.isSubmited = true;
    this.message = '';
    if(this.validator().name.invalid){ return;}
    this.onSubmitLoader(true);
    let formData = new FormData();
    formData.append('name', this.validator().name.value);
    this.BaseApi.addDepartment(formData).subscribe(data=>{
      if(data['status']=='200'){
        this.validator_toast.success =true;
        this.validator_toast.message =data['response'];
      }else{
        this.onSubmitLoader(false);
        this.message = data['response'];
      }
    });
  }
  onSubmitLoader(state) {
    this.submitLoader = state;
  }
  resetFormField(){
    this.addDepartmentForm.reset();
    this.images = [];
    this.validator_toast.isSubmited = false;
    this.validator_toast.success = false;
    this.validator_toast.message = '';
  }
  viewDepartmentList(){
    return this.router.navigate(['authenticated/view-department-list']);
  }
}
