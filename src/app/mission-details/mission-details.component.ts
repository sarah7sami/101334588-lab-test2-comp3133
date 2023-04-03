import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceXService } from '../services/spacex-api.service';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {
  mission: any;

  constructor(private route: ActivatedRoute, private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('flight_number');
    if (flightNumber) {
      this.spaceXService.getLaunchByFlightNumber(+flightNumber).subscribe(data => {
        this.mission = data;
      });
    }
  }  
}
