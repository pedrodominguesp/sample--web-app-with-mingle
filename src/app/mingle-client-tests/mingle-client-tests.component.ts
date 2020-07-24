import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MingleService } from '@totvs/mingle';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-mingle-client-tests',
  templateUrl: './mingle-client-tests.component.html',
  styleUrls: ['./mingle-client-tests.component.css']
})
export class MingleClientTestsComponent implements OnInit {
  data: any;
  label: string;
  @ViewChild('boxUrl', { read: ElementRef, static: true }) boxUrlElement;
  constructor(private mingleService: MingleService, private poNotification: PoNotificationService) { }

  ngOnInit(): void {
  }

  getAccessToken() {
    this.data = this.mingleService.getAccessToken();
    this.label = "AccessToken"
  }

  refreshToken(){
    this.data = JSON.stringify(this.mingleService.getBodyToRefreshTokenAPI());
    this.label = "Body refresh token"
  }

  copyToClipboard() {
    this.boxUrlElement.nativeElement.querySelector('textarea').select();
    document.execCommand('copy');
    this.poNotification.success('Text copied!');
  }

  metrics() {
    for (let i = 0; i < 40; i++) {
      this.mingleService.registerMetric('custom', {jtw:i});
      
    }
  }
}
