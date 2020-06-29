import { Component, OnInit } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {}

  readonly menus: Array<PoMenuItem> = [
    { label: 'MingleClient', icon: 'po-icon-settings' }
  ];

}
