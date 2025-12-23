import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCard, } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Asesor } from '../../../../shared/interfaces/asesor.interface';

@Component({
  selector: 'app-asesores-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCard,
    MatIconModule
  ],
  templateUrl: './asesores-page.component.html',
  styleUrls: ['./asesores-page.component.css'],
})
export class AsesoresPageComponent {
  asesores: Asesor[] = [
    { id: '1', nombre: 'Juan Pérez', imagen: '', instancia: 'Instancia A', estado: 'activo' },
    { id: '2', nombre: 'María López', imagen: '', instancia: 'Instancia B', estado: 'inactivo' },
    { id: '3', nombre: 'Carlos Ruiz', imagen: '', instancia: 'Instancia C', estado: 'activo' },
  ];

  defaultImage = 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png';


  agregarAsesor(){

  }
}
