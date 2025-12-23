import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-add-modal-example',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './add-modal-example.component.html',
  styleUrls: ['./add-modal-example.component.css']
})
export class AddModalExampleComponent {
  constructor(private dialog: MatDialog) {}

  openModal() {
    this.dialog.open(AddModalContentComponent, {
      width: '400px'
    });
  }
}

@Component({
  selector: 'app-add-modal-content',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>Nuevo Asesor</h2>
    <mat-dialog-content>
      <p>Este es un ejemplo de modal. Aquí puedes poner tu formulario o loader.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cerrar</button>
    </mat-dialog-actions>
  `
})
export class AddModalContentComponent {}
