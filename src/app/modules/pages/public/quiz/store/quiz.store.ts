import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, QueryEntity  } from '@datorama/akita';

export interface option {
  id: number,
  name: string,
  price: number,
  img: string,
  control: string
}

export interface Item {
  id: number,
  title: string,
  type: string,
  options: option[]
}

export interface ItemsState extends EntityState<Item, number> { }

@StoreConfig({ name: 'Item' })
export class ItemsStore extends EntityStore<ItemsState> {
  constructor() {
    super() ;
  }

  loadItems(items: Item[], areItemsLoaded: boolean) {
    this.set(items);
    this.update(state => ({
      ...state,
      areItemsLoaded
    }));
  }
}

@Injectable()
export class ItemsQuery extends QueryEntity<ItemsState, Item> {
  constructor(protected store: ItemsStore) {
    super(store);
  }
}
