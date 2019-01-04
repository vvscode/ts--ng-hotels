export const GET_ITEMS_PENDING: string = 'GET_ITEMS_PENDING';
export const GET_ITEMS_SUCCESS: string = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR: string = 'GET_ITEMS_ERROR';

export const SET_ACTIVE_ITEM: string = 'SET_ACTIVE_ITEM';

export const SET_ACTIVE_TYPE: string = 'SET_ACTIVE_TYPE';

export class GetItemsPending {
  public readonly type: string = GET_ITEMS_PENDING;
}

export class GetItemsSuccess {
  public readonly type: string = GET_ITEMS_SUCCESS;

  public constructor(public payload: IWeatherItem[]) {}
}

export class GetItemsError {
  public readonly type: string = GET_ITEMS_ERROR;
}

export class SetActiveItem {
  public readonly type: string = SET_ACTIVE_ITEM;

  public constructor(public payload: IWeatherItem) {}
}

export class SetActiveType {
  public readonly type: string = SET_ACTIVE_TYPE;

  public constructor(public payload: string) {}
}
