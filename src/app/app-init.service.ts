import { Injectable } from '@angular/core';
import { MingleService, Configuration } from '@totvs/mingle'
import { ConfigService } from './config/config.service';
@Injectable()
export class AppInitService {

  constructor(private configService: ConfigService, private mingleService: MingleService) { }

  mingleConfiguration(): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log("Mingle Service Configuration called");
      const config = new Configuration();
      config.modules.web = true;
      config.environment = 'DEV';
      config.modules.usage_metrics = true;
      config.modules.gateway = true;
      config.modules.push_notification = true;
      config.server = this.configService.getEnvironmentURL()
      config.app_identifier = this.configService.getIdApp();

      this.mingleService.setConfiguration(config);
      
      this.mingleService.init()
      .then( init => {
        resolve('Mingle Service Init');
      }).catch(error => {
        console.log("error" , error);
        
        reject(error);
      });

      console.log("Mingle Service configuration completed");
      
    });
  }
}
