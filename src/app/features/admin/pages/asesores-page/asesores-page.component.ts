import { Component } from '@angular/core';
import { Asesor } from '../../../../shared/interfaces/asesor.interface';

@Component({
  selector: 'app-asesores-page',
  templateUrl: './asesores-page.component.html',
  styleUrl: './asesores-page.component.css'
})
export class AsesoresPageComponent {


  asesores: Asesor [] = [
      {
      id: '1',
      nombre: 'Mateo',
      instancia: 'mateo-instance',
      estado: 'activo',
    },
    {
      id: '2',
      nombre: 'Carlos',
      instancia: 'carlos-instance',
      estado: 'activo',
    },
    {
      id: '3',
      nombre: 'Andrea',
      instancia: 'andrea-instance',
      estado: 'inactivo',
    },
  ];


}
