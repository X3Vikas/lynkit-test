import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
const packageData = require('../../../../../package.json');

@Injectable()
export class PrintResolver implements Resolve<any> {

  resolve(): Promise<object | null> {
    return Promise.resolve(packageData);
  }

}
