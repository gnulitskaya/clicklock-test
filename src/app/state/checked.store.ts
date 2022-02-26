import { Injectable } from '@angular/core';
import { Store } from '@datorama/akita';

export interface ICheckedEvent {
	text: number | null,
	isChecked: boolean
}

export function createInitialState(): ICheckedEvent {
  return {
    text: null,
    isChecked: false
  };
}

@Injectable()
export class CheckedCreateStore extends Store<ICheckedEvent>{
  constructor() {
    super(createInitialState());
  }
}
