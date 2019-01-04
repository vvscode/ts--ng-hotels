import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import {
  GET_ITEMS_PENDING,
  GetItemsError,
  GetItemsSuccess,
  SetActiveItem,
  SetActiveType,
} from '../actions/items.action';
import { SetActionsActive } from '@ngrx/store-devtools/src/actions';

@Injectable()
export class GetItemsEffect {
  @Effect()
  public products$: Observable<Action> = this._actions$.pipe(
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
