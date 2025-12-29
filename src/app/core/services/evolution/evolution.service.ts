import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvolutionService {
  private baseUrl = environment.apiUrl + '/evolution';

  constructor(private http: HttpClient) {}

  getConnectionState(instanceName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/state/${instanceName}`);
  }

  createInstance(instanceName: string, webhookUrl: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, { instanceName, webhookUrl });
  }

  connectInstance(instanceName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/connect/${instanceName}`);
  }

  deleteInstance(instanceName: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${instanceName}`);
  }

  logoutInstance(instanceName: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/logout/${instanceName}`);
  }

  fetchInstances(): Observable<any> {
    return this.http.get(`${this.baseUrl}/instances`);
  }
}
