import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapBy',
})
export class MapByPipe implements PipeTransform {
  // tslint:disable no-any
  public transform(value: any, fieldName: string): any {
    if (Array.isArray(value)) {
      return value.map((el: object) => el[fieldName]);
    }
    return value;
  }
}
