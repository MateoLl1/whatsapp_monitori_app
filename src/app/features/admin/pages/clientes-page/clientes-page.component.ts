import { Component } from '@angular/core';
import { Cliente } from '../../../../shared/interfaces/cliente.interface';

@Component({
  selector: 'app-clientes-page',
  templateUrl: './clientes-page.component.html',
  styleUrl: './clientes-page.component.css'
})
export class ClientesPageComponent {
  clientes: Cliente[] = [
    {
      id: 'c1',
      nombre: 'Juan Pérez',
      telefono: '593987617113',
    },
    {
      id: 'c2',
      nombre: 'María López',
      telefono: '593998112233',
    },
  ];
}
