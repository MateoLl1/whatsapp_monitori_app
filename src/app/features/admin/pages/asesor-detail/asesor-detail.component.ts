import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AsesoresService } from '../../../../core/services/asesor/asesores.service';
import { Asesor } from '../../../../shared/interfaces/asesor.interface';
import { Conversacion } from '../../../../shared/interfaces/conversacion.interface';
import { Mensaje } from '../../../../shared/interfaces/mensaje.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { EvolutionService } from '../../../../core/services/evolution/evolution.service';
import { ConversacionesService } from '../../../../core/services/conversaciones/conversaciones.service';
import { MensajesService } from '../../../../core/services/mensajes/mensajes.service';
import { QrModalComponent } from '../../../../shared/components/modals/qr-modal/qr-modal.component';

@Component({
  selector: 'app-asesor-detail',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule],
  templateUrl: './asesor-detail.component.html',
  styleUrls: ['./asesor-detail.component.css'],
})
export class AsesorDetailComponent implements OnInit {
  asesor: Asesor | null = null;
  qrBase64: string | null = null;
  loadingQR = false;
  connectionState: string | null = null;
  conversaciones: Conversacion[] = [];
  mensajes: Mensaje[] = [];
  selectedConversacion: Conversacion | null = null;

  constructor(
    private route: ActivatedRoute,
    private asesoresService: AsesoresService,
    private evolutionService: EvolutionService,
    private conversacionesService: ConversacionesService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  abrirQRModal() {
    if (!this.asesor) return;
    this.asesoresService.connectAsesor(this.asesor.id).subscribe({
      next: (res) => {
        this.dialog.open(QrModalComponent, {
          width: '400px',
          data: {
            base64: res.base64,
            code: res.code,
            pairingCode: res.pairingCode,
          },
        });
      },
      error: (err) => console.error(err),
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.asesoresService.getAsesor(id).subscribe({
      next: (res) => {
        this.asesor = res;
        if (this.asesor?.nombre) {
          this.evolutionService
            .getConnectionState(this.asesor.nombre)
            .subscribe({
              next: (res) => {
                const state = res?.instance?.state;
                this.connectionState = state === 'open' ? 'activo' : 'inactivo';
                this.asesor!.estado = this.connectionState;
              },
              error: (err) => console.error(err),
            });
        }

        this.conversacionesService.findAll().subscribe({
          next: (res) => {
            this.conversaciones = res.filter(
              (c: Conversacion) => c.asesor?.id === this.asesor?.id
            );
          },
          error: (err) => console.error(err),
        });
      },
      error: (err) => console.error(err),
    });
  }


  logout() {
    if (!this.asesor) return;
    this.evolutionService.deleteInstance(this.asesor.nombre).subscribe({
      next: (res) => {
        this.asesor!.estado = 'inactivo';
        this.qrBase64 = null;
        this.router.navigate(['/asesores']);
      },
      error: (err) => console.error(err),
    });
  }

  irAConversacion(conv: Conversacion) {
    this.router.navigate(['/admin/chat', conv.id]);
  }
}
