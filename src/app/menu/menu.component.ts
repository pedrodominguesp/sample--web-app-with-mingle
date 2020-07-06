import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { MingleService } from '@totvs/mingle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private mingleService: MingleService, private route: Router) { }

  ngOnInit(): void {
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', shortLabel: 'Home', icon: 'po-icon-home', link: '/home' },
    { label: 'Testes de gateway', shortLabel: 'Gateway', icon: 'po-icon-settings', link: '/gateway'  },
    { label: 'Testes Mingle Client', shortLabel: 'MingleClient', icon: 'po-icon-settings', link: '/mingleClient'  },
    { label: 'Logout', shortLabel: 'Logout', icon: 'po-icon po-icon-exit', action:this.logout.bind(this)  }
  ];

  logout(){
    this.mingleService.auth.logout().subscribe(() => {
      console.log("usuario saiu");
      this.route.navigate(['login'])
    })
    return null;
  }
}
