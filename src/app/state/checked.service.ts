import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { CheckedStore } from './checked.store';
@Injectable({providedIn: 'root'})

export class CheckedService {
  constructor(private _checkedStore: CheckedStore) {}

  updateText(newText: number | null) {
    this._checkedStore.update(state => ({...state, text: newText}));
  }

  updateChecked(newChecked: boolean) {
    this._checkedStore.update(state => ({...state, isChecked: newChecked}));
  }
}
