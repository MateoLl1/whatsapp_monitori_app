import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatsResponse } from '../../interfaces/stats.interfaces';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetricasService {

  apiBase = environment.apiUrl;

  constructor(
    private http:HttpClient
  ) { }


  stats():Observable<StatsResponse>{
    return this.http.get<StatsResponse>(`${this.apiBase}/asesores/stats`);
  }

}
