import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot } from '@angular/router';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  private role:any;

  constructor(
    private authService: NbAuthService,
    private router: Router,
    ) {
      this.authService.getToken().subscribe(token=>{
        this.role=token.isValid() ? token.getPayload()['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] : 'User'
      });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated()
    .pipe(
      map((authenticated: any) => {
        if (!authenticated ) {
          this.router.navigate(['auth/login']);
          return false;
        }
        else{
          if (route.data.role && route.data.role!=this.role) {
            this.router.navigate(['/']);
            return false;
          }
          else{
            console.log("got here");
            return true;
          }
        }

      }),
    );
  }

}
