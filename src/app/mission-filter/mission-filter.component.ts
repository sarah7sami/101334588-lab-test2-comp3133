import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mission-filter',
  templateUrl: './mission-filter.component.html',
  styleUrls: ['./mission-filter.component.css']
})
export class MissionFilterComponent {
  @Output() yearSelected = new EventEmitter<number>();

  onYearSelected(year: number) {
    this.yearSelected.emit(year);
  }
}
