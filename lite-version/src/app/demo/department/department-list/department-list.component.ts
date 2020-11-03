import { Component, OnInit } from '@angular/core';
import { BaseApiService } from 'src/app/services/base-api.service';
import { SkeletonService } from 'src/app/services/skeleton.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  visible: boolean = false;
  selectedDepartment: any = [];
  departments: any = [];
  visibleAnimate: boolean = false;
  updateDepartmentForm: FormGroup;
  validator_toast:any ={
    isSubmited: false,
    success:false,
    message: ''
  };
  images: any = [];
  message: any = '';
  submitLoader:boolean = false;
  index: any = '';
  constructor(private BaseApi: BaseApiService,
              private SkeletonService: SkeletonService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.BaseApi.getAllDepartments().subscribe(data=>{this.departments = data;});
    this.updateDepartmentForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
  validator(){
    return this.updateDepartmentForm.controls;
  }
  onSubmitUpdateStudent(){
  }
  onSubmitDeleteDepartment(){
    let formData = new FormData();
    formData.append('id', this.selectedDepartment['id']);
    formData.append('name', this.selectedDepartment['name']);
    this.BaseApi.deleteDepartment(formData).subscribe(data=>{
      console.log(data);
      console.log(this.index)
      this.departments.splice(this.index, 0);
    })
  }
  editItem(data, index){
    this.selectedDepartment = data;
    this.index = index;
  }
  enableDisableRating(department){
    let index = this.departments.findIndex(x => x.id == department.id);
    let formData = new FormData();
    formData.append('id', department.id);
    let v: any = null;
    if(this.departments[index].rating_activation == 0){
      this.departments[index].rating_activation = 1; v = 1;
    }else{
      this.departments[index].rating_activation = 0; v=0;
    }
    formData.append('rating_activation', v);
    setTimeout(()=>{
      this.BaseApi.enableDisableRating(formData).subscribe();
    },1000);
  }
  enableAll(){
    for(let i=0; i<this.departments.length; i++){
      this.departments[i].rating_activation = 1;
    }
    this.BaseApi.enableAll().subscribe(data=>{
      
    })
  }
  disableAll(){
    for(let i=0; i<this.departments.length; i++){
      this.departments[i].rating_activation = 0;
    }
    this.BaseApi.disableAll().subscribe(data=>{

    })
  }
}
