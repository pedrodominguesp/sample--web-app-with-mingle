import { Injectable } from '@angular/core';

import { MingleService, Configuration } from '@totvs/mingle'

@Injectable()
export class ConfigService {

  constructor(private mingleService: MingleService) { }

  saveConfig(environment, alias, idApp): void {
    this.setEnvironment(environment);
    this.setAlias(alias)
    this.setIdApp(idApp)
    this.mingleConfiguration();
  }

  getEnvironment(): string {
    return localStorage.getItem("environment");
  }

  getEnvironmentURL(): string {
    let env = this.getEnvironment();
    switch (env) {
      case '1':
        env = 'http://localhost:80/api';
        break;
      case '2':
        env = 'https://dev-mingle.totvs.io/api';
        break;
      case '3':
        env = 'https://hom-mingle.totvs.com.br/api';
        break;
      case '4' :
        env = 'https://mingle.totvs.com.br/api';
        break;
    }
    return env;
  }

  private setEnvironment(value: string): void {
  
    localStorage.setItem("environment", value);
  }

  getAlias(): string {
    return localStorage.getItem("alias")
  }

  private setAlias(value: string): void {
    localStorage.setItem("alias", value);
  }

  getIdApp(): string {
    return localStorage.getItem("idApp")
  }

  private setIdApp(value: string): void {
    localStorage.setItem("idApp", value);
  }

  mingleConfiguration(): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log("Mingle Service Configuration called");
      const config = new Configuration();
      config.modules.web = true;
      config.environment = 'DEV';
      config.modules.usage_metrics = true;
      config.modules.gateway = true;
      config.modules.push_notification = true;
      config.server = this.getEnvironmentURL();
      config.app_identifier = this.getIdApp();

      this.mingleService.setConfiguration(config);

      this.mingleService.init()
        .then(init => {
          resolve('Mingle Service Init');
        }).catch(error => {
          console.log("error", error);
          reject(error);
        });

      console.log("Mingle Service configuration completed");

    });
  }

}
