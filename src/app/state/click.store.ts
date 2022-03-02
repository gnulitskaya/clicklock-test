import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

interface IClickEvent {
	id: number;
	clickTime: string
}

export interface ClickState extends EntityState<IClickEvent> {
  id: number;
	clickTime: string
}

@StoreConfig({ name: 'click' })
export class ClickStore extends EntityStore<ClickState> {
  constructor() {
    super() ;
  }
}


