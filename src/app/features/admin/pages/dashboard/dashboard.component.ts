import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MetricasService } from '../../../../core/services/metricas/metricas.service';
import { StatsResponse } from '../../../../core/interfaces/stats.interfaces';
import { AlertDangerComponent } from "../../../../shared/components/alerts/alert-danger/alert-danger.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, AlertDangerComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totalAsesores = 0;
  conectados = 0;
  desconectados = 0;
  respuestasHoy = 0;

  error = false;

  constructor(private metricasService: MetricasService) {}

  ngOnInit(): void {
    this.cargarMetricas();
  }

  cargarMetricas() {
    this.metricasService.stats().subscribe({
      next: (data: StatsResponse) => {
        this.totalAsesores = data.asesores;
        this.conectados = data.conectados;
        this.desconectados = data.desconectados;
        this.respuestasHoy = data.mensajesHoy;
        this.error = false;
      },
      error: () => {
        this.error = true;
      },
    });
  }
}
