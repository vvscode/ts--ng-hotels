import { Component, OnChanges } from '@angular/core';
import { IWeatherItem } from '../../../../../@types/IWeatherItem';
import { Observable } from 'rxjs';
import { ItemsService } from '../../../services/items.service';

@Component({
  selector: 'ng-hotels-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent {
  public types: string[];
  public activeType: string;
  public activeItem?: IWeatherItem;

  public list?: Observable<IWeatherItem[]> = this._itemsService.getItems();

  public constructor(private _itemsService: ItemsService) {
    this._itemsService.activeItem$.subscribe((item: IWeatherItem) => {
      this.activeItem = item;
      this.activeType = item.type;
    });
  }

  public setActiveType(type: string): void {
    this.activeType = type;
  }

  public onCardClick(item: IWeatherItem): void {
    this._itemsService.setActiveItem(item);
  }
}
