import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCard } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Asesor } from '../../../../shared/interfaces/asesor.interface';
import { MatDialog } from '@angular/material/dialog';
import { CreateAsesorModalComponent } from '../../../../shared/components/modals/create-asesor-modal/create-asesor-modal.component';

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

  readonly defaultImage = 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png';

  constructor(private dialog: MatDialog) {}

  openModal() {
    this.dialog.open(CreateAsesorModalComponent, {
      width: '400px'
    }).afterClosed().subscribe(result => {
      if (result) {
        this.asesores.push(result);
      }
    });
  }
}
