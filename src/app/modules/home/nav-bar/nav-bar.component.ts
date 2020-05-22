import { SessionService } from './../../../services/session.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

  @Input() user: any;

  constructor(
    private _SessionService: SessionService,
    private _Router: Router
  ) { }

  logout() {
    this._SessionService.removeSessions();
    this._Router.navigate(['/']);
  }

}
