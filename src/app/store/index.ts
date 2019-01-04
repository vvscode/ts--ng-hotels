import { ActionReducerMap } from '@ngrx/store';
import { items } from './reducers/items';
import { activeItem } from './reducers/activeItem';
import { activeType } from './reducers/activeType';

export const reducers: ActionReducerMap<IStore> = {
  items,
  activeItem,
  activeType,
};
