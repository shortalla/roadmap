import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Interceptor for authorization
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Basic ${'c2hvcnRhbGxhQGdtYWlsLmNvbTpQMW5ndTFuLUFH'}`
      }
    });

    return next.handle(req);
  }

}