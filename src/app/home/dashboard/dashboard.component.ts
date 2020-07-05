import { Component, OnInit } from '@angular/core';
import { MingleService } from '@totvs/mingle';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  set_alias: string;
  sessionInfo: any;
  constructor(private mingleService: MingleService) { }

  ngOnInit(): void {
    this.loadSessionInfo();
  }

  loadSessionInfo() {
    this.sessionInfo = this.mingleService.getSessionInfo();    
  }

}
