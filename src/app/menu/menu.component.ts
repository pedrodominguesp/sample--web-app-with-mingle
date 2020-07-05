import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', shortLabel: 'Home', icon: 'po-icon-home', link: '/home' },
    { label: 'Testes de gateway', shortLabel: 'Gateway', icon: 'po-icon-settings', link: '/gateway'  }
  ];

}
