import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  missions: any[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://api.spacexdata.com/v3/launches').subscribe(data => {
      this.missions = data.map(mission => {
        return {
          missionName: mission.mission_name,
          launchYear: mission.launch_year,
          details: mission.details,
          missionPatchSmall: mission.links.mission_patch_small
        };
      });
    });
  }
}

