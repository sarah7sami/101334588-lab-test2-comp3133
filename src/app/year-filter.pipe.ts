import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearFilter'
})
export class YearFilterPipe implements PipeTransform {
  transform(missions: any[], year: string): any[] {
    if (!year) return missions;
    return missions.filter(mission => mission.launch_year === year);
  }
}
