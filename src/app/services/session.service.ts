import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  setSession(keyValue: { [key: string]: string }): void {
    Object.keys(keyValue).forEach((prop) => {
      window.localStorage.removeItem(prop);
      window.localStorage.setItem(prop, keyValue[prop]);
    });
  }

  getSession(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  removeSession(key: string): void {
    if (window.localStorage.hasOwnProperty(key)) {
      window.localStorage.removeItem(key);
    }
  }

  removeSessions(): void {
    window.localStorage.clear();
  }
}
