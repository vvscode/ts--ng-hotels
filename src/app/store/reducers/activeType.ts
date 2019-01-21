import { SET_ACTIVE_TYPE } from '../actions/items.action';

const defaultState: string = '';

export function activeType(
  state: string = defaultState,
  // tslint:disable-next-line
  action: any,
): string {
  switch (action.type) {
    case SET_ACTIVE_TYPE: {
      return action.payload;
    }
  }
  return state;
}
