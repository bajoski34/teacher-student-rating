import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../app/services/authentication.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private AuthenticationService: AuthenticationService, private router: Router){}
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let contentType = '';
    // if (httpRequest.headers.has('Content-Type'))
    // contentType = httpRequest.headers.get('Content-Type');
    const authReq = httpRequest.clone({
    setHeaders: {
          'Authorization': `Bearer-${this.AuthenticationService.getToken()}`
          // 'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    return next.handle(authReq).pipe(catchError((error)=>{
      this.router.navigate(['/authenticated/maintenance/error'], {
        queryParams: error
      });
    // this response is handled
    // stop the chain of handlers by returning empty
    return Observable.empty();
    }));
  }
}
