import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { GatewayComponent } from './gateway/gateway.component';
import { MingleClientTestsComponent } from './mingle-client-tests/mingle-client-tests.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'config', component: ConfigComponent},
  {path: 'home', component: HomeComponent},
  {path: 'gateway', component: GatewayComponent},
  {path: 'mingleClient', component: MingleClientTestsComponent},
  {path:'', redirectTo: '/login',  pathMatch: 'full'}
]; 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }