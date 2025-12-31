import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CreateAsesorModalComponent } from '../../../../shared/components/modals/create-asesor-modal/create-asesor-modal.component';
import { AsesoresService } from '../../../../core/services/asesor/asesores.service';
import { Asesor } from '../../../../shared/interfaces/asesor.interface';
import { AlertDangerComponent } from "../../../../shared/components/alerts/alert-danger/alert-danger.component";

@Component({
  selector: 'app-asesores-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    AlertDangerComponent
],
  templateUrl: './asesores-page.component.html',
  styleUrls: ['./asesores-page.component.css'],
})
export class AsesoresPageComponent implements OnInit {
  asesores: Asesor[] = [];
  readonly defaultImage = 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png';

  constructor(
    private dialog: MatDialog,
    private asesoresService: AsesoresService
  ) {}

  ngOnInit(): void {
    this.loadAsesores();
  }

  loadAsesores() {
    this.asesoresService.getAsesores().subscribe({
      next: (res: Asesor[]) => {
        this.asesores = res;
      },
      error: (err: any) => {
        console.error('Error al cargar asesores', err);
      }
    });
  }

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
