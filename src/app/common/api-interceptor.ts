import { Inject, Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BASE_API_PATH } from '../config';
import { catchError, filter, map } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  public constructor(@Inject(BASE_API_PATH) private _baseApiPath: string) {}

  // tslint:disable no-any
  public intercept<T extends { data: any }>(
    req: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<T>> {
    const jsonReq: HttpRequest<T> = req.clone({
      url: `${this._baseApiPath}${req.url}`,
    });
    return next.handle(jsonReq).pipe(
      filter(this._isHttpResponse),
      map((res: HttpResponse<T>) => {
        return res.clone({ body: res.body && res.body.data });
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
      }),
    );
  }

  private _isHttpResponse<T>(event: HttpEvent<T>): event is HttpResponse<T> {
    if (event instanceof HttpResponse) {
      return true;
    }
    return false;
  }
}
