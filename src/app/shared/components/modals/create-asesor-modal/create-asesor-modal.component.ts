import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../../services/alert.service';
import { AsesoresService } from '../../../../core/services/asesor/asesores.service';

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
    private asesorService: AsesoresService,
    private alertService: AlertService
  ) {}
  crear() {
    this.asesorService.createAsesor({nombre:this.nombre,activo:true}).subscribe({
      next: (res) => {
        this.alertService.success('Asesor creado correctamente');
        this.dialogRef.close(res);
      },
      error: (err) => {
        this.alertService.error('Error al crear el asesor');
      },
    });
  }
  cancelar() {
    this.dialogRef.close();
  }
}
