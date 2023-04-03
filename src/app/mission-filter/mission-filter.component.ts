import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mission-filter',
  templateUrl: './mission-filter.component.html',
  styleUrls: ['./mission-filter.component.css']
})
export class MissionFilterComponent {
  years: number[] = [];
  selectedYear: number | undefined;

  @Output() yearSelected = new EventEmitter<number>();

  constructor() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 2006; year--) {
      this.years.push(year);
    }
  }

  onYearChange(year: number) {
    this.selectedYear = year;
    this.yearSelected.emit(this.selectedYear);
  }
}
