import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})
export class AgePipePipe implements PipeTransform {

  transform(value: Date): number {
    if (value !== null && value !== undefined) {
      const today = new Date();
      let age = today.getFullYear() - value.getFullYear();
      const m = today.getMonth() - value.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < value.getDate())) {
            age--;
        }
        return age;
    } else {
      return null;
    }
    }

}
