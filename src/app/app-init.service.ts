import { Injectable } from '@angular/core';

import { ConfigService } from './config/config.service';
@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(private configService: ConfigService, ) { }

  applyInitConfigMingle() {
    return this.configService.mingleConfiguration();
  }
}
