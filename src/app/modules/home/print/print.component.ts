import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html'
})
export class PrintComponent implements OnInit {
  printData: any
  constructor(private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._ActivatedRoute.data.subscribe(data => {
      this.printData = data;
    });
  }

  print() {
    window.print()
  }

}
