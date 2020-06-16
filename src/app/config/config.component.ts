import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { PoDialogService } from '@po-ui/ng-components';
import { Router } from '@angular/router';

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
  constructor(private poDialog: PoDialogService, private router: Router) { }

  ngOnInit(): void {
    this.loading = false;
    this.setInitialValues();
  }

  private save(): void {
    this.loading = true;
    this.setEnvironment(this.environment);
    this.setAlias(this.alias)
    this.setIdApp(this.idApp)
    setTimeout(() => {
      this.loading = false;
    }, 500);
    this.poDialog.alert({
      title: 'Eba!',
      message: 'Configurações atualizadas com sucesso!',
      ok: () => (this.router.navigate(['/login']))
    });
  }
  

  private setInitialValues(): void {
    this.environment = this.getEnvironment();
    this.alias = this.getAlias();
    this.idApp = this.getIdApp();
  }

  private getEnvironment(): string {
    return localStorage.getItem("environment")
  }

  private setEnvironment(value: string): void {
    localStorage.setItem("environment", value);
  }

  private getAlias(): string {
    return localStorage.getItem("alias")
  }

  private setAlias(value: string): void {
    localStorage.setItem("alias", value);
  }

  private getIdApp(): string {
    return localStorage.getItem("idApp")
  }

  private setIdApp(value: string): void {
    localStorage.setItem("idApp", value);
  }

}
