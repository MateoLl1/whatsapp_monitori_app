import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, firstValueFrom } from 'rxjs';
import { TokenResponse } from '../interfaces/token.interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  private token: string | null = null;
  private tokenExp: number | null = null;
  private tokenPromise: Promise<string> | null = null;

  constructor(private http: HttpClient) {}

  async getToken(): Promise<string> {
    if (this.token && this.tokenExp && Date.now() < this.tokenExp) {
      return this.token;
    }

    if (this.tokenPromise) {
      return this.tokenPromise;
    }

    this.tokenPromise = firstValueFrom(
      this.http.post<TokenResponse>(`${this.apiUrl}/auth/token`, {})
    ).then((response) => {
      this.token = response.access_token;
      this.tokenExp = this.getTokenExpiration(response.access_token);
      this.tokenPromise = null;
      return this.token;
    }).catch((err) => {
      this.tokenPromise = null;
      throw err;
    });

    return this.tokenPromise;
  }

  clearToken() {
    this.token = null;
    this.tokenExp = null;
    this.tokenPromise = null;
  }

  private getTokenExpiration(token: string): number {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000;
  }
}
