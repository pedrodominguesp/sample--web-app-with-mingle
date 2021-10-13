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
    // const options = { headers: { header_teste: `123456` }, body: { teste: 123 } };
   //this.mingleService.setTokenInSession('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZmZGE3YmRhYWNiMDY4NWYzNGQ1OWUyIiwic2V0X2lkIjoiNWZiZTU3MTJkOGNjYmYwMDJjZjQ0M2YzIiwiY2xpZW50X2lkIjoiNWVlYjY3ZWRlYjYyNzQwMDI5YjFmMDNmIiwiYXBwX2lkIjoiNWZiMmFlMmE1NzVhZTgwMDRhN2QxZmY1Iiwib3JpZ2luIjoibW9iaWxlIiwidXR5cGUiOiJQcm94eVVzZXIiLCJ0dHlwZSI6ImEiLCJpYXQiOjE2MTUzOTk1NDYsImV4cCI6MTYxNTIyNjkwMiwiYXVkIjoibWluZ2xlIiwiaXNzIjoid2VidGVzdGluZzogTGludXggeDg2XzY0In0.YxmWXzSh_Y74MvZCDk0JsUaWUSAJocRefzJgdvqgLn4');
    this.mingleService.gateway.get('testJson').subscribe(response => {
      this.gatewayData = JSON.stringify(response);
      this.isHideLoading = true;
    }, error => {
      console.log("=======", error);
      if (error.response) {
        if(error.response.status) {
          console.log("NO IF")
          this.gatewayData = JSON.stringify(error['response']['data']) + JSON.stringify(error['response']['status']) ;
        }
      } else {
        console.log("NO else")
        this.gatewayData = error;
      }
      
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
      console.log("OK fora do erro")
    }, error => {
      console.log("ESTOU NO ERRO !!!!!")
      this.gatewayData = error;
      this.isHideLoading = true;
    })
  }
}
