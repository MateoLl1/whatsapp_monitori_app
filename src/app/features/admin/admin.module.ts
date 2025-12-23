import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesoresPageComponent } from './pages/asesores-page/asesores-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ClientesPageComponent } from './pages/clientes-page/clientes-page.component';

import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
@NgModule({
  declarations: [
    ChatPageComponent,
    ClientesPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    AsesoresPageComponent,

  ],
})
export class AdminModule {}
