import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsesoresService } from '../../../../core/services/asesor/asesores.service';
import { Asesor } from '../../../../shared/interfaces/asesor.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-asesor-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './asesor-detail.component.html',
  styleUrls: ['./asesor-detail.component.css']
})
export class AsesorDetailComponent implements OnInit {
  asesor: Asesor | null = null;
  qrBase64: string | null = null;
  loadingQR = false;

  constructor(
    private route: ActivatedRoute,
    private asesoresService: AsesoresService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.asesoresService.getAsesor(id).subscribe({
      next: (res) => {
        this.asesor = res;
      },
      error: (err) => {
        console.error('Error al cargar asesor', err);
      }
    });
  }

  conectar() {
    if (!this.asesor) return;
    this.loadingQR = true;
    this.asesoresService.connectAsesor(this.asesor.id).subscribe({
      next: (res) => {
        this.qrBase64 = res.base64;
        this.loadingQR = false;
      },
      error: (err) => {
        console.error('Error al obtener QR', err);
        this.loadingQR = false;
      }
    });
  }
}
