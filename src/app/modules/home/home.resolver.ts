import { SessionService } from './../../services/session.service';
import { Resolve, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeResolver implements Resolve<any>{

  constructor(
    private _SessionService: SessionService,
    private _Router: Router
  ) { }

  resolve(): Promise<any> {
    const fullName = this._SessionService.getSession('fullName');
    if (!fullName) {
      this._Router.navigate(['/']);
    }
    return Promise.resolve(fullName || '');
  }

}
