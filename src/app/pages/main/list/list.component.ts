import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { ItemsService } from '../../../services/items.service';
import { activeType } from 'src/app/store/reducers/activeType';
import { activeItem } from 'src/app/store/reducers/activeItem';
import {
  GetItemsPending,
  SetActiveItem,
  SetActiveType,
} from 'src/app/store/actions/items.action';

@Component({
  selector: 'ng-hotels-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent {
  public activeType: string;
  public activeItem?: Observable<IWeatherItem>;

  public list?: Observable<IWeatherItem[]>;

  public constructor(
    private _store: Store<{
      items: IWeatherItem[];
      activeType: string;
      activeItem: IWeatherItem;
    }>,
  ) {
    _store.dispatch(new GetItemsPending());
    this.list = _store.pipe(select('items'));
    this.activeItem = _store.pipe(select('activeItem'));
    _store
      .pipe(select('activeType'))
      .subscribe((type: string) => (this.activeType = type));
  }

  public setActiveType(type: string): void {
    this._store.dispatch(new SetActiveType(type));
  }

  public onCardClick(item: IWeatherItem): void {
    this._store.dispatch(new SetActiveItem(item));
  }
}
