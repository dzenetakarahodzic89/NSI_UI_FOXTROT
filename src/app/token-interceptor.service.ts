import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authToken = '';

    for (let i = 0; i < localStorage.length; i++) {
      const token = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (token.credentialType === 'AccessToken')
        authToken = token.secret;
    }

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
        'Access-Control-Allow-Origin': '*'
      }
    });

    return next.handle(request);
  }
}
