import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Mensaje } from '../../../shared/interfaces/mensaje.interface';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  private baseUrl = environment.apiUrl + '/mensajes';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Mensaje[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  findOne(id: number): Observable<Mensaje> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<Mensaje> {
    return this.http.post<any>(`${this.baseUrl}`, data);
  }

  update(id: number, data: any): Observable<Mensaje> {
    return this.http.patch<any>(`${this.baseUrl}/${id}`, data);
  }

  remove(id: number): Observable<Mensaje> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
