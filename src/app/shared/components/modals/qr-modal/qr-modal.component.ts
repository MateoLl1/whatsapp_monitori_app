import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'modal-qr-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './qr-modal.component.html',
  styleUrls: ['./qr-modal.component.css'],
})
export class QrModalComponent {
  constructor(
    private dialogRef: MatDialogRef<QrModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { base64: string; code?: string; pairingCode?: string }
  ) {}

  cerrar() {
    this.dialogRef.close();
  }
}
