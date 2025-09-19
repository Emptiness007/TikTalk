import {CanActivateFn, Router, RouterOutlet} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from './auth-service';

export const canActivateAuth = () => {
  const isLogin = inject(AuthService).isAuth

  if(isLogin){
    return true
  }

  return inject(Router).createUrlTree(['/login'])
}
