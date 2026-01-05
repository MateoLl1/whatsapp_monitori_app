import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesoresPageComponent } from './pages/asesores-page/asesores-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ClientesPageComponent } from './pages/clientes-page/clientes-page.component';

import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ChatPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
    AsesoresPageComponent,


  ],
})
export class AdminModule {}
