import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { BaseApiService } from 'src/app/services/base-api.service';
import { SkeletonService } from 'src/app/services/skeleton.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.scss']
})
export class StartRatingComponent implements OnInit {
  visible: boolean = false;
  courseInfo: any = [];
  message: any = '';
  submitLoader:boolean = false;
  next_click:boolean = false;
  stages: any = null;
  allQestions: any = [];
  currentEvaluation:any = {section: [],question: [],current_question: null,answer: null};
  max_stage:any = null;
  params:any = null;
  answers_list: any = [];
  selected_answer:any = null;
  error: boolean = false;
  user: any = [];
  success_message: any = '';
  constructor(private BaseApi: BaseApiService,
              private SkeletonService: SkeletonService,
              private formBuilder: FormBuilder,
              private ActivatedRoute: ActivatedRoute,
              private AuthenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.AuthenticationService.getUser();
    this.user ? this.user = this.user['user'] : this.router.navigate(['']);
    this.ActivatedRoute.paramMap.subscribe(params => {
      if(params['params']['course_code']){
        this.params = params['params']['course_code'];
        this.BaseApi.getCourseInfo(this.params).subscribe(data=>{
          this.courseInfo = data;
          });
        this.BaseApi.getAllQuestionAndSection().subscribe(data=>{
          this.allQestions=data;
          this.max_stage = this.allQestions.length;
        });
      }else{

      }
    })
  }
  getTeacherImage(image){
    return this.SkeletonService.getTeacherPictures(image);
  }
  proceedEvaluation(stage){
    if(stage == 0){
      this.stages =stage;
      this.currentEvaluation.section = this.allQestions[stage]['section'];
      this.currentEvaluation.question = this.allQestions[stage]['questions'];
      this.currentEvaluation.current_question = this.allQestions[stage]['questions'][stage];
    }else{
      this.next_click = true;
      if(this.validateRating().length==0){
        if(stage < 5){
          this.currentEvaluation.section = this.allQestions[stage]['section'];
          this.currentEvaluation.question = this.allQestions[stage]['questions'];
          this.currentEvaluation.current_question = this.allQestions[stage]['questions'][stage];
          this.BaseApi.postSectionQuestionRating(this.user['id'], this.courseInfo.teacher.id, this.answers_list).subscribe(data =>{
            this.answers_list = [];
            this.next_click = false;
            this.stages = stage;
          });
        }else{
          this.BaseApi.postSectionQuestionRating(this.user['id'], this.courseInfo.teacher.id, this.answers_list).subscribe(data =>{
          this.answers_list = [];
          this.next_click = false;
          this.concludeRating(this.user['id'], this.params);
          });
        }
      }
    }
  }
  concludeRating(user_id, course_code){
    let obj = {user_id: user_id, course_code: course_code};
    this.BaseApi.hasRatedCourse(obj).subscribe(data=>{
      this.success_message = data;
    });
  }
  select_a_value(question_id, answer_value){
    let index = this.answers_list.findIndex(x => x.question_id == question_id);
    if(index<0){
      this.answers_list.push({
        answer: answer_value, question_id: question_id
      });
    }else{
      this.answers_list[index].answer = answer_value;
    }
  }
  validateRating(){
    let errors = [];
    for(let i=0; i<this.currentEvaluation.question.length;i++){
      let index = this.answers_list.findIndex(x => x.question_id == this.currentEvaluation.question[i].id);
      if(index<0){
        errors.push(this.currentEvaluation.question[i].id)
      }
    }
    return this.next_click ? errors : [];
  }
}
