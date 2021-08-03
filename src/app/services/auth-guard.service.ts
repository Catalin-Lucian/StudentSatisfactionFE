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
        this.role=token.isValid() ? token.getPayload()['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] : 'guest'
        console.log(this.role);
      });
  }

  canActivate() {
    return this.authService.isAuthenticated()
    .pipe(
      map((authenticated: any) => {
        if (!authenticated ) {
          this.router.navigate(['auth/login']);
          return false;
        }
        else{
          return true;
        }

      }),
    );
  }

  isAdmin(){
    return true;
  }
}
