import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesoresPageComponent } from './pages/asesores-page/asesores-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ClientesPageComponent } from './pages/clientes-page/clientes-page.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
@NgModule({
  declarations: [
    AsesoresPageComponent,
    ChatPageComponent,
    ClientesPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class AdminModule {}
