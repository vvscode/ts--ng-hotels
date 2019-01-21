import { SET_ACTIVE_ITEM } from '../actions/items.action';

const defaultState: IWeatherItem = {} as IWeatherItem;

export function activeItem(
  state: IWeatherItem = defaultState,
  // tslint:disable-next-line
  action: any,
): IWeatherItem {
  switch (action.type) {
    case SET_ACTIVE_ITEM: {
      return action.payload;
    }
  }
  return state;
}
