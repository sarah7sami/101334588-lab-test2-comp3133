// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit, Input } from '@angular/core';


// @Component({
//   selector: 'app-mission-list',
//   templateUrl: './mission-list.component.html',
//   styleUrls: ['./mission-list.component.css'],
// })

// export class MissionListComponent implements OnInit {
//   @Input() selectedYear: string = '';
//   missions: any[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.http.get<any[]>('https://api.spacexdata.com/v3/launches')
//       .subscribe(missions => {
//         this.missions = missions;
//       });
//   }

//   onYearSelected(year: string) {
//     this.selectedYear = year;
//   }
// }

import { Component, Input, OnInit } from '@angular/core';
import { Mission } from '../models/mission.model';
import { SpaceXService } from '../services/spacex-api.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  @Input() selectedYear: string = '';
  missions: Mission[] = [];

  constructor(private missionService: SpaceXService) {}

  ngOnInit(): void {
    this.missionService.getLaunches().subscribe((missions: Mission[]) => {
      this.missions = missions;
    });
  }  

  onYearSelected(year: string): void {
    this.selectedYear = year;
  }
}
