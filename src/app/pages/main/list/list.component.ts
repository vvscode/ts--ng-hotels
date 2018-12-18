import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IWeatherItem } from '../../../../../@types/IWeatherItem';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-hotels-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent implements OnChanges {
  public types: string[];

  @Input()
  public activeItem?: IWeatherItem;

  @Input()
  public list?: Observable<IWeatherItem[]>;

  public ngOnChanges(changes: SimpleChanges): void {
    this.types = Array.from(
      changes.list.currentValue.value
        .map((el: IWeatherItem) => el.type)
        .reduce((set: Set<String>, el: string) => {
          set.add(el);
          return set;
        }, new Set())
        .values(),
    ).sort() as string[];
  }
}
