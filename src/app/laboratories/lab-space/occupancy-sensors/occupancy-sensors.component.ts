import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './occupancy-sensors.component.html'
})
export class OccupancySensorsComponent {
  readonly title = 'Occupancy Sensors';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('occ_sensor_back');
  }

}
