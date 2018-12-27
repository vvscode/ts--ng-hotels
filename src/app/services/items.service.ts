import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  public activeItem?: IWeatherItem;
  public activeItem$: Subject<IWeatherItem>;

  public constructor(@Inject(HttpClient) private _http: HttpClient) {
    this.activeItem$ = new Subject();
  }

  public getItems(): Observable<IWeatherItem[]> {
    const ret: Observable<IWeatherItem[]> = this._http.get<IWeatherItem[]>(
      `/items/data.json`,
    );

    ret.subscribe((list: IWeatherItem[]) => {
      if (!this.activeItem) {
        this.setActiveItem(list[0]);
      }
    });

    return ret;
  }

  public setActiveItem(item: IWeatherItem): void {
    this.activeItem = item;
    this.activeItem$.next(item);
  }
}
