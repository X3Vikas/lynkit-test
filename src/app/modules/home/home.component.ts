import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(
    private _ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._ActivatedRoute.data.subscribe(val => {
      this.user = val.user;
    });
  }
}
