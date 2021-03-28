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
  constructor(public apexEvent: ApexChartService, private baseService: BaseApiService, private auth: AuthenticationService) {
    this.chartDB = ChartDB;
    this.baseService.getTeachersAssessment(this.user.id).subscribe(data =>{
      console.log(data);
      this.res = data;
      if(this.res.status == '200'){
        for(let i =0;i<this.res.response.length;i++){
          this.chartDB.pie1CAC.series[i] = Math.round(this.res.response[i].data);
        }
      }
    })
  }
  ngOnInit() {}

}
