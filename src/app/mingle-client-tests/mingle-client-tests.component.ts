import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MingleService } from '@totvs/mingle';
import { PoNotificationService } from '@po-ui/ng-components';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mingle-client-tests',
  templateUrl: './mingle-client-tests.component.html',
  styleUrls: ['./mingle-client-tests.component.css']
})
export class MingleClientTestsComponent implements OnInit {
  data: any;
  label: string;
  @ViewChild('boxUrl', { read: ElementRef, static: true }) boxUrlElement;
  constructor(private mingleService: MingleService, private poNotification: PoNotificationService, private http : HttpClient) { }

  ngOnInit(): void {
  }

  getAccessToken() {
    this.data = this.mingleService.getAccessToken();
    this.label = "AccessToken"
  }

  refreshToken(){
    const bodyRefreshToken = this.mingleService.getBodyToRefreshTokenAPI();
    const urlRefreshTOken = this.mingleService.getRefreshTokenURL();
    
    this.http.post(urlRefreshTOken, bodyRefreshToken).subscribe(resultAuth => console.log(resultAuth))
  }

  copyToClipboard() {
    this.boxUrlElement.nativeElement.querySelector('textarea').select();
    document.execCommand('copy');
    this.poNotification.success('Text copied!');
  }

  metrics() {
    this.mingleService.registerMetric('custom', {testeMingleService:"ok"});
    this.poNotification.success('Métrica customizada registrada com sucesso.');
  }
}
