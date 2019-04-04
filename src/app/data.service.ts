// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {

  constructor() { }

  private cnt: number = 0;

  inc() {
    return ++this.cnt;
  }
  dec() {
    return --this.cnt;
  }
}
