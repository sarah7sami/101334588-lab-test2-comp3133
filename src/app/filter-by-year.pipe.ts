import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByYear'
})
export class FilterByYearPipe implements PipeTransform {
  transform(missions: any[], year: number): any[] {
    if (!missions || !year) {
      return missions;
    }

    return missions.filter(mission => mission.launchYear === year.toString());
  }
}
