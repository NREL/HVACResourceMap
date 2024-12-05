import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './air-water-distribution.component.html'
})
export class AirWaterDistributionComponent {
  readonly title = 'Air and Water Distribution';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('cp-outline');
  }

}
