import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-mission-filter',
  templateUrl: './mission-filter.component.html',
  styleUrls: ['./mission-filter.component.css']
})
export class MissionFilterComponent {
  @Output() yearSelected = new EventEmitter<string>();
  @Input() selectedYear: string = '';

  years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];

  onYearSelected(event: any) {
    this.yearSelected.emit(event.target.value);
  }
}

