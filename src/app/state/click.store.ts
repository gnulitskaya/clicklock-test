import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, QueryEntity } from '@datorama/akita';

interface IClickEvent {
	id: number;
	clickTime: string
}

export interface ClickState extends EntityState<IClickEvent> {
}

const createInitialState =(): ClickState => ({
  id: 0,
  clickTime: null
})

@Injectable()
@StoreConfig({ name: 'click' })
export class ClickStore extends EntityStore<ClickState> {
  constructor() {
    super(createInitialState) ;
  }
}

@Injectable()
export class ClickQuery extends QueryEntity<ClickState> {
  constructor(protected store: ClickStore) {
    super(store);
  }
}


