import { Component, OnInit } from '@angular/core';
import { MingleService } from '@totvs/mingle';
import { error } from 'protractor';
import { url } from 'inspector';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})
export class GatewayComponent implements OnInit {
  gatewayData: String;
  constructor(private mingleService: MingleService) { }

  ngOnInit(): void {
  }
  isHideLoading = true;

  getClients() {

    this.isHideLoading = false;
    const options = { headers: { header_teste: `123456` }, body: { teste: 123 } };

    this.mingleService.gateway.get('clients', options).subscribe(response => {
      this.gatewayData = JSON.stringify(response);
      this.isHideLoading = true;
    }, error => {
      this.gatewayData = error;
      this.isHideLoading = true;
    });
  }

  getRecurse() {
    this.isHideLoading = false;
    const options = {
      headers: {
        'header-customizado': 'conteudo-header'
      }
    }

    this.mingleService.gateway.get('recurse/12345567%2F', options).subscribe(response => {
      this.gatewayData = JSON.stringify(response);
      this.isHideLoading = true;
    }, error => {
      this.gatewayData = error;
      this.isHideLoading = true;
    })

  }

  postTest() {
    this.isHideLoading = false;
    const options = { headers: { "x-totvs-test": "123456" }, body: { teste: 123 } };
    this.mingleService.gateway.post('send', options).subscribe(response => {
      this.gatewayData = JSON.stringify(response);
      this.isHideLoading = true;
    }, error => {
      this.gatewayData = error;
      this.isHideLoading = true;
    })
  }
}
