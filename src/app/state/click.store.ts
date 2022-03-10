import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, QueryEntity } from '@datorama/akita';
import {Observable} from "rxjs";
import {IClickEvent} from "./click.interface";

export interface ClickState extends EntityState<IClickEvent> {}

@Injectable({providedIn: 'root'})
@StoreConfig({ name: 'click' })
export class ClickStore extends EntityStore<ClickState, IClickEvent> {
  constructor() {
    super();
  }
}

//компонент не должен получить данные из store напрямую
//для этого есть query
@Injectable({providedIn: 'root'})
export class ClickQuery extends QueryEntity<ClickState, IClickEvent> {
  constructor(protected store: ClickStore) {
    super(store);
  }

  //for clickTime
  getLastEntity(): Observable<IClickEvent | undefined> {
    return this.selectLast();
  }

  //for id
  getCountOfEntity(): Observable<number> {
    return this.selectCount();
  }


}


