import { Injectable } from '@angular/core';
import { CheckedStore } from './checked.store';
@Injectable()

export class CheckedService {
  constructor(private _checkedCreateStore: CheckedStore) {}

  updateChecked(newText: number, newChecked: boolean) {
    this._checkedCreateStore.update({ text: newText, isChecked: newChecked});
  }
}
