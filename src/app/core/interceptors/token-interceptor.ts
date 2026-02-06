import { Injectable } from '@angular/core';
import {
    HttpContextToken,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const SKIP_INTERCEPTOR = new HttpContextToken(() => false);
const httpStatusCodesToIntercept = [401, 403];

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    if (req.context.get(SKIP_INTERCEPTOR)) {
        return next.handle(req);
    }

    if (token === null || this.authService.isTokenExpired(token)) {
        this.router.navigate(['login']);
        return next.handle(req); // Blocca ulteriori richieste, reindirizzando
    }

     // Aggiungi il token all'header della richiesta se non è scaduto
     const cloned = token
     ? req.clone({
         setHeaders: { Authorization: `Bearer ${token}` },
       })
     : req;

   return next.handle(cloned).pipe(
    catchError((error: HttpErrorResponse) => {
      if (httpStatusCodesToIntercept.includes(error.status)) {
        // Token scaduto o accesso negato → Redirect alla pagina di login
        this.router.navigate(['login']);
      }
      return throwError(() => error);
    })
  );
 }
}