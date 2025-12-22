import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AsesoresPageComponent } from './pages/asesores-page/asesores-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ClientesPageComponent } from './pages/clientes-page/clientes-page.component';


@NgModule({
  declarations: [
    AsesoresPageComponent,
    ChatPageComponent,
    ClientesPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
