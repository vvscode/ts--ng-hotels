import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniq',
})
export class UniqPipe implements PipeTransform {
  // tslint:disable no-any
  public transform(value: any): any {
    if (Array.isArray(value)) {
      return [...new Set(value).values()];
    }
    return null;
  }
}
