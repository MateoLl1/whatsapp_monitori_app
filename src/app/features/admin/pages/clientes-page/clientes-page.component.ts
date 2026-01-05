import { Component, OnInit } from '@angular/core';
import { ConversacionesService } from '../../../../core/services/conversaciones/conversaciones.service';
import { Conversacion } from '../../../../shared/interfaces/conversacion.interface';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AlertDangerComponent } from "../../../../shared/components/alerts/alert-danger/alert-danger.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes-page',
  templateUrl: './clientes-page.component.html',
  styleUrl: './clientes-page.component.css',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    AlertDangerComponent
]
})
export class ClientesPageComponent implements OnInit {

  conversaciones: Conversacion [] = [];

  constructor(private conversacionService: ConversacionesService) {}


  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(){
    this.conversacionService.findAll().subscribe({
      next: (clientes) =>{
        this.conversaciones = clientes;
      }
    })
  }

}
