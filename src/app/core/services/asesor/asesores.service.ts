import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AsesoresService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createAsesor(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/asesores`, data);
  }

  getAsesores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/asesores`);
  }

  getAsesor(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/asesores/${id}`);
  }

  updateAsesor(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/asesores/${id}`, data);
  }

  deleteAsesor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/asesores/${id}`);
  }

  connectAsesor(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/asesores/${id}/connect`);
  }
}
