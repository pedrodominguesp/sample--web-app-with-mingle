import { Component, OnInit } from '@angular/core';
import { MingleService } from '@totvs/mingle';
import { ConfigService } from 'src/app/config/config.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  set_alias: string;
  sessionInfo: any;
  constructor(private mingleService: MingleService, private configService: ConfigService) { }

  ngOnInit(): void {
    this.loadSessionInfo();
  }

  loadSessionInfo() {
    this.sessionInfo = this.mingleService.getSessionInfo();
    this.sessionInfo.environmentUrl = this.configService.getEnvironmentURL();
    console.log(this.sessionInfo)
  }

}
