import { Injectable } from '@angular/core';
import {Query, Store, StoreConfig} from '@datorama/akita';

export interface CheckedState {
	text: number | null,
	isChecked: boolean
}

export function createInitialState(): CheckedState {
  return {
    text: null,
    isChecked: false
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({ name: 'checked' })
export class CheckedStore extends Store<CheckedState>{
  constructor() {
    super(createInitialState());
  }
}

@Injectable({providedIn: 'root'})
export class CheckedQuery extends Query<CheckedState> {
  constructor(protected store: CheckedStore) {
    super(store);
  }
}
