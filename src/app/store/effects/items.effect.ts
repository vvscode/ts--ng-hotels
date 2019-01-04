import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap, switchMap, take, map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import {
  GET_ITEMS_PENDING,
  GetItemsError,
  GetItemsSuccess,
  SET_ACTIVE_TYPE,
  SetActiveItem,
  SetActiveType,
} from '../actions/items.action';
import { SetActionsActive } from '@ngrx/store-devtools/src/actions';

@Injectable()
export class GetItemsEffect {
  @Effect()
  public items$$: Observable<Action> = this._actions$.pipe(
    ofType(GET_ITEMS_PENDING),
    switchMap(() =>
      this._http.get<IWeatherItem[]>(`/items/data.json`).pipe(
        // If successful, dispatch success action with result)
        mergeMap((items: IWeatherItem[]) => [
          new GetItemsSuccess(items),
          new SetActiveType(items[0] ? items[0].type : ''),
          new SetActiveItem(items[0] || null),
        ]),
        // If request fails, dispatch failed action
        catchError(() => of(new GetItemsError())),
      ),
    ),
  );

  public constructor(private _http: HttpClient, private _actions$: Actions) {}
}

@Injectable()
export class SetTypeEffect {
  @Effect()
  public currentItem$: Observable<Action> = this._actions$.pipe(
    ofType(SET_ACTIVE_TYPE),
    // tslint:disable-next-line
    switchMap((action: any) =>
      this._store.pipe(
        take(1),
        select('items'),
        map((items: IWeatherItem[]) => {
          const item: IWeatherItem = items.find(
            (el: IWeatherItem) => el.type === action.payload,
          );
          return new SetActiveItem(item);
        }),
        // If request fails, dispatch failed action
        catchError(() => of(new GetItemsError())),
      ),
    ),
  );

  public constructor(
    private _store: Store<{
      items: IWeatherItem[];
      activeType: string;
      activeItem: IWeatherItem;
    }>,
    private _actions$: Actions,
  ) {}
}
