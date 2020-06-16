import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly menus: Array<PoMenuItem> = [
    {label: 'Configurar Login', shortLabel: 'Config', link: '/config', icon:'po-icon-settings'  }
  ]

}
