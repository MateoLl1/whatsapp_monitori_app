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
    { label: 'Inicio', icon: 'group', route: '/admin/dashboard' },
    { label: 'Asesores', icon: 'group', route: '/admin/asesores' },
    { label: 'Clientes', icon: 'person', route: '/admin/clientes/1' },
    { label: 'Chat', icon: 'chat', route: '/admin/chat/1' },
    { label: 'Configuración', icon: 'settings', route: '/admin/settings' },
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}
