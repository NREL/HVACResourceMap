import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-occupancy-sensors',
  templateUrl: './occupancy-sensors.component.html'
})
export class OccupancySensorsComponent {
  readonly title = 'Occupancy Sensors';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
