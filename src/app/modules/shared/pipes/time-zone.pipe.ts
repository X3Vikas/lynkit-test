import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeZone'
})

export class TimeZonePipe implements PipeTransform {
  transform(value, timeZone: 'UTC' | 'IST' = 'UTC') {
    return timeZone === 'UTC' ? moment.utc(value).toString() : moment(value).toString();
  }
}
