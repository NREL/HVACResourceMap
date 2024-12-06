import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './maintenance-commissioning.component.html'
})
export class MaintenanceCommissioningComponent {
  readonly title = 'Maintenance and Commissioning';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('cp-outline');
  }

}
