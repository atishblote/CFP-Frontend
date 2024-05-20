import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeStamp',
})
export class TimeStampPipe implements PipeTransform {
  transform(timestamp: number, format: string = 'DD-MM-YYYY HH:mm:ss'): string {
    if (isNaN(timestamp)) {
      return '';
    }

    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    // Replace format placeholders with date components
    const formattedDate = format
      .replace('DD', day)
      .replace('MM', month)
      .replace('YYYY', year.toString())
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);

    return formattedDate;
  }
}
