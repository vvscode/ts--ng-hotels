import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemsService } from '../../services/items.service';
import { IWeatherItem } from '../../../../@types/IWeatherItem';

@Component({
  selector: 'ng-hotels-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent {
  public listItems?: Observable<IWeatherItem[]> = this._itemsService.getItems();
  public activeItem?: IWeatherItem;

  public constructor(private _itemsService: ItemsService) {
    this.listItems.subscribe(
      (list: IWeatherItem[]) => (this.activeItem = list[0]),
    );
  }
}
