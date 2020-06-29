import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { PoDialogService } from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  environment: string;
  alias: string;
  idApp: string;
  loading: boolean;
  constructor(private poDialog: PoDialogService, private router: Router, private configService: ConfigService) { }

  ngOnInit(): void {
    this.loading = false;
    this.setInitialValues();
  }

   save(): void {
    this.loading = true;
    this.configService.saveConfig(this.environment, this.alias, this.idApp);
    setTimeout(() => {
      this.loading = false;
      this.poDialog.alert({
        title: 'Eba!',
        message: 'Configurações atualizadas com sucesso!',
        ok: () => (this.router.navigate(['/login']))
      });
    }, 500);
    
  }

  private setInitialValues(): void {
    this.environment = this.configService.getEnvironment();
    this.alias = this.configService.getAlias();
    this.idApp = this.configService.getIdApp();
  }

 
}
