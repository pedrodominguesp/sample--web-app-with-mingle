import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MingleHttpInterceptor, MingleService } from '@totvs/mingle';

import { PoPageLoginModule } from '@po-ui/ng-templates';
import { PoModule } from '@po-ui/ng-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { ConfigService } from './config/config.service';
import { AppInitService } from './app-init.service';
import { DashboardComponent } from './home/dashboard/dashboard.component';

export function initializeApp1(appInitService: AppInitService) {
  return (): Promise<any> => { 
    return appInitService.mingleConfiguration();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConfigComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoPageLoginModule,
    FormsModule
  ],
  providers: [
    AppInitService,
    ConfigService,
    MingleService, 
    { provide: APP_INITIALIZER,useFactory: initializeApp1, deps: [AppInitService], multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: MingleHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
