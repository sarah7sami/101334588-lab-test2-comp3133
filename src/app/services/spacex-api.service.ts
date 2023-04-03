import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  private apiUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) { }

  getLaunches() {
    return this.http.get(`${this.apiUrl}/launches`);
  }

  getLaunchesByYear(year: number) {
    return this.http.get(`${this.apiUrl}/launches?launch_year=${year}`);
  }

  getLaunchByFlightNumber(flightNumber: number) {
    return this.http.get(`${this.apiUrl}/launches/${flightNumber}`);
  }

}
