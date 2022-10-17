import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Menubar';

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit():void{
    this.items = [
      {
        label: "Inicio",
        icon: "pi pi-home",
        routerLink: "/home"
      },
      {
        label: "Contacto",
        icon: "pi pi-user",
        routerLink: "/contacto"
      },
      {
        label: "Admin",
        icon: "pi pi-user",
        routerLink: "/admin"
      },
      {
        label: "Login",
        icon: "pi pi-user",
        routerLink: "/login"
      }
    ];
  }

}
