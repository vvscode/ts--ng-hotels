import { GET_ITEMS_SUCCESS } from '../actions/items.action';

const defaultState: IWeatherItem[] = [];

export function items(
  state: IWeatherItem[] = defaultState,
  // tslint:disable-next-line
  action: any,
): IWeatherItem[] {
  switch (action.type) {
    case GET_ITEMS_SUCCESS: {
      return action.payload;
    }
  }
  return state;
}
