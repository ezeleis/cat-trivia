import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcessoGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const usuarioLogado = localStorage.getItem('usuarioLogado');

    if (usuarioLogado) {
      return true;
    } else {
      return this.router.parseUrl('/sem-acesso');
    }
  }
}
