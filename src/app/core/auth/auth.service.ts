import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { TokenResponse } from '../interfaces/token.interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private token$ = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  async getToken(): Promise<string> {
    const current = this.token$.value;
    if (current) {
      return current;
    }

    const response = await firstValueFrom(
      this.http.post<TokenResponse>(
        `${this.apiUrl}/auth/token`,
        {}
      )
    );

    this.token$.next(response.access_token);
    return response.access_token;
  }

  clearToken() {
    this.token$.next(null);
  }
}
