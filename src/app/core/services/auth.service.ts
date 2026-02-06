import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignInResponse, SignInRequest, SignUpRequest } from '../models/sign-request';
import { jwtDecode } from 'jwt-decode';
import { SKIP_INTERCEPTOR } from '../interceptors/token-interceptor';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = '/api/auth/';

  constructor(private http: HttpClient, private router: Router) {}

  login(body: SignInRequest): Observable<SignInResponse> {
    this.removeToken();
    let url: string = `${this.baseUrl}login`;
    const context = new HttpContext().set(SKIP_INTERCEPTOR, true);

    return this.http.post<SignInResponse>(url, body, { context });
  }

  register(body: SignUpRequest) {
    let url: string = `${this.baseUrl}signup`;
    return this.http.post<void>(url, body);
  }

  isAuthenticated() {
    const token = this.getToken();
    return !!token;
  }

  getToken() {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user') ?? '')?.accessToken;
    }
  }

  getFullName() {
    if (localStorage.getItem('user')) {
      const surname = JSON.parse(localStorage.getItem('user') ?? '')?.surname;
      const name: string = JSON.parse(localStorage.getItem('user') ?? '')?.name;
      return `${surname} ${name}`;
    }
    return '';
  }

  getUserName() {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user') ?? '')?.username;
    }
  }

  removeToken(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('userFull');
  }

  isAdmin(): boolean {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user') ?? '')?.isAdmin;
    }
    return false;
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000); // Tempo corrente in secondi
      console.log(decoded.exp - currentTime);
      return decoded.exp < currentTime; // `exp` è la scadenza del token
    } catch (error) {
      console.log('ERROR TOKEN FUNC');
      return true; // Se non riesce a decodificare, considera il token scaduto
    }
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}logout`, {});
  }

  updateUser(name: string, surname: string) {
    // 1. Recupera l'oggetto esistente dal localStorage
    const stored = localStorage.getItem('user');
    if (stored) {
      const auth: SignInResponse = JSON.parse(stored);

      // 2. Aggiorna i campi desiderati
      const updatedUser: SignInResponse = {
        ...auth,
        name: name,
        surname: surname,
      };

      // 3. Salva di nuovo nel localStorage
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  }
}