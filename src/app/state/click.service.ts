import { ClickStore } from './click.store';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class ClickService {
  constructor(private _store: ClickStore) {}

  private counter: number = 0;

  updateClick() {
    this.counter++;
    this._store.add({id: this.counter, clickTime: new Date().toString()});

    console.log(this._store);
  }
}
