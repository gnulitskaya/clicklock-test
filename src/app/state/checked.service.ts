import { Injectable } from '@angular/core';
import { CheckedCreateStore } from './checked.store';
@Injectable()

export class CheckedService {
  constructor(private _checkedCreateStore: CheckedCreateStore) {}
}
