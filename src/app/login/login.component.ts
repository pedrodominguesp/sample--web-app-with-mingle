import { Component, OnInit } from '@angular/core';
import { PoMenuItem, PoNotificationService } from '@po-ui/ng-components';
import { MingleService } from '@totvs/mingle';
import { ConfigService } from '../config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean = false;

  constructor(private mingleService: MingleService,
    private configService: ConfigService,
    private route: Router,
    private poNotification: PoNotificationService) { }

  ngOnInit(): void {}

  readonly menus: Array<PoMenuItem> = [
    { label: 'Configurar Login', shortLabel: 'Config', link: '/config', icon: 'po-icon-settings' }
  ];
  
  login(formData) {
    this.loading = true;
    this.mingleService.auth.login(formData.login,
      formData.password,
      this.configService.getAlias())
      .subscribe((dataLogin) => {
        console.log("dados do login", dataLogin);

        this.route.navigate(['home']);
      }, (authError) => {
        console.log(authError);
        this.loading = false;
        this.poNotification.error('Falha na autenticação');
      });
  }

}
