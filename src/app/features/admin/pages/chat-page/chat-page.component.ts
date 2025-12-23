import { Component } from '@angular/core';
import { Mensaje } from '../../../../shared/interfaces/mensaje.interface';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css'
})
export class ChatPageComponent {
   mensajes: Mensaje[] = [
    {
      id: '1',
      from: 'cliente',
      texto: 'Hola, quisiera información',
      fecha: '2025-12-19 11:55',
    },
    {
      id: '2',
      from: 'asesor',
      texto: 'Claro, con gusto 😊',
      fecha: '2025-12-19 11:56',
    },
  ];
}
