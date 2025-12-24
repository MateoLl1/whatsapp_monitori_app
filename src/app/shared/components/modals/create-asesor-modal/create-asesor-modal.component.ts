import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AsesorService } from '../../../../core/services/asesor/asesor.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'modal-create-asesor-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './create-asesor-modal.component.html',
  styleUrl: './create-asesor-modal.component.css',
})
export class CreateAsesorModalComponent {
  nombre = '';
  constructor(
    private dialogRef: MatDialogRef<CreateAsesorModalComponent>,
    private asesorService: AsesorService,
    private alertService: AlertService
  ) {}
  crear() {
    this.asesorService.crearAsesor(this.nombre).subscribe({
      next: (res) => {
        this.alertService.success('Asesor creado correctamente');
        this.dialogRef.close(res);
      },
      error: (err) => {
        this.alertService.error('Error al crear el asesor');
        console.error('Error al crear asesor:', err);
      },
    });
  }
  cancelar() {
    this.dialogRef.close();
  }
}
