import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class VerifiedGuard implements CanActivate {

  constructor(private router: Router,
              private snackBar: MatSnackBar)
              { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (localStorage.getItem('CURRENT_ACCOUNT')) {      
      const auth = JSON.parse(localStorage.getItem('CURRENT_ACCOUNT'));
      const role = auth.role; 
      // const currentUrl = state.url.replace('/admin', '');
      console.log(state.url);
      if (role == "true" ) {    
        return true;
      } 
    }
    this.router.navigate([''],  { queryParams: { returnUrl: state.url } });
    
    return false;
  }

}
