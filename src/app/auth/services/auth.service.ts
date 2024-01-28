import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Endpoints } from 'src/app/core/endpoints/endpoints.model';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  constructor(private httpClient: HttpClient) {}

  login(body: LoginRequest): Observable<boolean> {
    return this.httpClient
      .post<boolean>(environment.baseUrl + Endpoints.login, body)
      .pipe(
        tap((res) => {
          if (res) {
            this.isAuthenticated = true;
          } else {
            this.isAuthenticated = false;
          }
        })
      );
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
