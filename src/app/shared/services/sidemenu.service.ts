import { Injectable } from '@angular/core';

export interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  divider?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  private readonly menuItems: MenuItem[] = [
    { label: 'Inicio', icon: 'home', route: '/admin/dashboard' },
    { label: 'Asesores', icon: 'group', route: '/admin/asesores' },
    { label: 'Clientes', icon: 'person', route: '/admin/clientes' },
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}
