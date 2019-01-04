import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'ng-hotels-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.less'],
})
export class SelectedItemComponent {
  public socialInfo$?: Observable<ISocialInfo>;

  public constructor(
    private _store: Store<{
      items: IWeatherItem[];
      activeType: string;
      activeItem: IWeatherItem;
    }>,
  ) {
    this.socialInfo$ = _store.pipe(
      select(
        (state: IStore) =>
          (state.activeItem || ({} as IWeatherItem)).social_info,
      ),
    );
  }
}
