import { BaseApiService } from './../../../services/base-api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-assessment',
  templateUrl: './teacher-assessment.component.html',
  styleUrls: ['./teacher-assessment.component.scss']
})
export class TeacherAssessmentComponent implements OnInit {
  teacher: any;
  assessment: any;
  constructor(private activatedRoute: ActivatedRoute,
              private baseApiService: BaseApiService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data=>{
      this.getTeacherRating(data.id);
    }, error =>{

    })
  }
  getTeacherRating(id){
    this.baseApiService.getTeachersAssessment(id).subscribe(data=>{

    })
  }
}
