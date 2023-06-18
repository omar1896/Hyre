import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastService } from '../Services/toast-service.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private route: Router, private toastService: ToastService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({
        next: (event) => {
          if (event.type === 4) {
            // Check if event is an HttpResponse
            if (event.status > 200 && event instanceof HttpResponse) {
              console.log(event);
              this.toastService.activateToast(
                event.body.message,
                event.body.success
              );
            }
          }
        },
        error: (event: HttpErrorResponse) => {
          if (event.status == 404) {
            this.route.navigateByUrl('404-notfound');
          }
          if (event instanceof HttpErrorResponse) {
            this.toastService.activateToast(
              event.error.message,
              event.error.success
            );
          }
        },
      })
    );
  }
}
