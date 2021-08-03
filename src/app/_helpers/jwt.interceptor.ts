import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NbAuthService} from '@nebular/auth'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    isLogedin:boolean=false;
    token:any='';
    constructor(private authService: NbAuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.authService.isAuthenticated().subscribe(logged=>this.isLogedin=logged);
      this.authService.getToken().subscribe(token=>this.token=token);
      if (this.isLogedin) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.token}`,
                    'Content-Type':'application/json'
                }
            });
        }
        return next.handle(request);
    }
}
