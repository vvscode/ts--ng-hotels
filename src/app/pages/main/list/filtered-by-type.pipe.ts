import { Pipe, PipeTransform } from '@angular/core';
import { IWeatherItem } from '../../../../../@types/IWeatherItem';

@Pipe({
  name: 'filteredByType',
})
export class FilteredByTypePipe implements PipeTransform {
  public transform(list: IWeatherItem[], type: string): IWeatherItem[] {
    return list.filter((el: IWeatherItem) => el.type === type);
  }
}
