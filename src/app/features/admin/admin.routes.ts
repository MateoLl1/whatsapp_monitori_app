// features/admin/admin.routes.ts
import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AsesoresPageComponent } from './pages/asesores-page/asesores-page.component';
import { ClientesPageComponent } from './pages/clientes-page/clientes-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'asesores', component: AsesoresPageComponent },
      { path: 'clientes/:asesorId', component: ClientesPageComponent },
      { path: 'chat/:clienteId', component: ChatPageComponent },
      { path: '**', redirectTo: 'asesores', pathMatch: 'full' },
    ],
  },
];
