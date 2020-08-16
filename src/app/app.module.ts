import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MingleHttpInterceptor, MingleService } from '@totvs/mingle';

import { PoPageLoginModule } from '@po-ui/ng-templates';
import { PoModule, PoFieldModule } from '@po-ui/ng-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { ConfigService } from './config/config.service';
import { AppInitService } from './app-init.service';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { GatewayComponent } from './gateway/gateway.component';
import { MenuComponent } from './menu/menu.component';
import { MingleClientTestsComponent } from './mingle-client-tests/mingle-client-tests.component';

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
    DashboardComponent,
    GatewayComponent,
    MenuComponent,
    MingleClientTestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoPageLoginModule,
    FormsModule,
    PoFieldModule,
    ReactiveFormsModule
  ],
  providers: [
    AppInitService,
    ConfigService,
    MingleService, 
    { provide: APP_INITIALIZER, useFactory: initializeApp1, deps: [AppInitService], multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: MingleHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
