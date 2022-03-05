import { ClickStore, ClickQuery } from './click.store';
import { Injectable } from '@angular/core';

@Injectable()

export class ClickService {
  constructor(private _store: ClickStore, _query: ClickQuery) {}

  counter: number = 0;
  myDate?: Date;

  updateClick() {
    this.counter++;
    this.myDate = new Date();
    // this.myDate.toString();
    this._store.update({id: this.counter, clickTime: this.myDate});
    console.log(this._store);
  }
}
