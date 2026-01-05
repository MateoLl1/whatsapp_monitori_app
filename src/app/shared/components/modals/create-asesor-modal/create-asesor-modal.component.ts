import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../../services/alert.service';
import { AsesoresService } from '../../../../core/services/asesor/asesores.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'modal-create-asesor-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './create-asesor-modal.component.html',
  styleUrls: ['./create-asesor-modal.component.css'],
})
export class CreateAsesorModalComponent {
  nombre = '';
  numero_whatsapp = '';
  pais = '593';

  constructor(
    private dialogRef: MatDialogRef<CreateAsesorModalComponent>,
    private asesorService: AsesoresService,
    private alertService: AlertService
  ) {}

  private toPascalCase(value: string): string {
    return value
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }

  private normalizeNumero(numero: string): string {
    let clean = numero.replace(/\s+/g, '');
    clean = clean.replace(/\+/g, '');
    if (clean.startsWith('0')) {
      clean = clean.substring(1);
    }
    return clean;
  }

  crear() {
    if (!this.nombre || !this.numero_whatsapp) {
      this.alertService.error('Nombre y número de WhatsApp son obligatorios');
      return;
    }

    const nombreFinal = this.toPascalCase(this.nombre);
    const numeroNormalizado = this.normalizeNumero(this.numero_whatsapp);

    const regex = /^[0-9]{9,10}$/;
    if (!regex.test(numeroNormalizado)) {
      this.alertService.error(
        'El número debe tener exactamente 9 o 10 dígitos, sin + ni letras'
      );
      return;
    }

    const numeroFinal = this.pais + numeroNormalizado;

    this.asesorService
      .createAsesor({
        nombre: nombreFinal,
        activo: false,
        numero_whatsapp: numeroFinal,
      })
      .subscribe({
        next: (res) => {
          this.alertService.success('Asesor creado correctamente');
          this.dialogRef.close(res);
          location.reload();
        },
        error: () => {
          this.alertService.error('Error al crear el asesor');
        },
      });
  }

  cancelar() {
    this.dialogRef.close();
  }
}
