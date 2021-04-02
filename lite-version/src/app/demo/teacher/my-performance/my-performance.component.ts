import { ActivatedRoute } from '@angular/router';
import { BaseApiService } from './../../../services/base-api.service';
import { ApexChartService } from './../../../theme/shared/components/chart/apex-chart/apex-chart.service';
import { ChartDB } from './../../../fack-db/chart-data';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthenticationService } from './../../../services/authentication.service';

@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyPerformanceComponent implements OnInit {
  public chartDB: any;
  user = this.auth.getUser()['user'];
  res:any;
  constructor(public apexEvent: ApexChartService,
              private baseService: BaseApiService,
              private auth: AuthenticationService,
              private route: ActivatedRoute) {
    this.chartDB = ChartDB;
    this.route.paramMap.subscribe(params => {
      let id = params.get('teacher_id');
      if(id){
        this.baseService.getTeachersAssessmentWithTeacherId(id).subscribe(data =>{
          this.res = data;
          if(this.res.status == '200'){
            for(let i =0;i<this.res.response.length;i++){
              this.chartDB.pie1CAC.series[i] = Math.round(this.res.response[i].data);
            }
          }else{
            for(let i =0;i<5;i++){
              this.chartDB.pie1CAC.series[i] = 0;
            }
          }
        })
      }else{
        this.baseService.getTeachersAssessment(this.user.id).subscribe(data =>{
          this.res = data;
          if(this.res.status == '200'){
            for(let i =0;i<this.res.response.length;i++){
              this.chartDB.pie1CAC.series[i] = Math.round(this.res.response[i].data);
            }
          }else{
            for(let i =0;i<5;i++){
              this.chartDB.pie1CAC.series[i] = 0;
            }
          }
        })
      }
   })
  }
  ngOnInit() {}

}
